require("dotenv").config();

const express = require("express");
const app = express();
const { Resend } = require("resend");
const cors = require("cors");
const { JSDOM } = require("jsdom");
const createDOMPurify = require("dompurify");
const { window } = new JSDOM("");
const DOMPurify = createDOMPurify(window);
const rateLimit = require("express-rate-limit");
const validator = require("validator");

const port = process.env.PORT || 3000;

if (!process.env.RESEND_API_KEY) {
	throw new Error("Missing env var: RESEND_API_KEY");
}
if (!process.env.RESEND_EMAIL) {
	throw new Error("Missing env var: RESEND_EMAIL");
}
if (!process.env.RESEND_NAME) {
	throw new Error("Missing env var: RESEND_NAME");
}
if (!process.env.FORWARDING_EMAIL) {
	throw new Error("Missing env var: FORWARDING_EMAIL");
}

const forwardingEmail = process.env.FORWARDING_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = { name: 100, subject: 200, message: 5000 };

app.use(
	cors({
		origin: process.env.JVR_DOMAIN_ADDRESS || "*",
	}),
);

app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post(
	"/message",
	rateLimit({
		windowMs: 60_000,
		max: 3,
		standardHeaders: true,
		legacyHeaders: false,
	}),
	async (req, res) => {
		if (!req.is("application/json")) {
			return res.status(400).send("Expected application/json");
		}

		const { contactForm } = req.body;

		if (
			!contactForm ||
			!contactForm.name ||
			!contactForm.email ||
			!contactForm.subject ||
			!contactForm.message
		) {
			return res
				.status(400)
				.send("Missing required fields: name, email, subject, message");
		}

		if (!validator.isEmail(contactForm.email)) {
			return res.status(400).send("Invalid email address");
		}

		if (
			contactForm.name.length > MAX_LENGTHS.name ||
			contactForm.subject.length > MAX_LENGTHS.subject ||
			contactForm.message.length > MAX_LENGTHS.message
		) {
			return res
				.status(400)
				.send("One or more fields exceed maximum length");
		}

		const safeName = contactForm.name.replace(/[\r\n]/g, "");
		const safeEmail = contactForm.email.replace(/[\r\n]/g, "");
		const safeSubject = contactForm.subject.replace(/[\r\n]/g, "");
		const safeMessage = contactForm.message.replace(/\r/g, "");

		const cleanHTML = DOMPurify.sanitize(
			`<strong>${safeName} <${safeEmail}></strong><br><br><p>${safeMessage}</p>`,
		);

		try {
			const { data, error } = await resend.emails.send({
				from: `${process.env.RESEND_NAME} <${process.env.RESEND_EMAIL}>`,
				replyTo: `${safeName} <${safeEmail}>`,
				to: [forwardingEmail],
				subject: safeSubject,
				text: `You have received a new message from ${safeName} (${safeEmail}):\n\n${safeMessage}`,
				html: cleanHTML,
			});

			if (error) {
				console.error("Resend API error:", error);
				return res.status(500).send("Failed to send email");
			} else {
				res.status(200).send("Email sent successfully");
			}
		} catch (err) {
			console.error("Unexpected error:", err);
			res.status(500).send("An unexpected error occurred");
		}
	},
);

app.listen(port, () => console.log(`Listening on port ${port}`));
