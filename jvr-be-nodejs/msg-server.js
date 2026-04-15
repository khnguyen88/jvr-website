require("dotenv").config();

const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
const { DOMpurify } = require("dompurify");
const app = express();
const port = process.env.PORT || 3000;
const forwardingEmail = process.env.FORWARDING_EMAIL || "";
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

app.options("/message", (req, res) => {
	res.set("Allow", "POST, OPTIONS");
	res.sendStatus(204);
});

app.post("/message", (req, res) => {
	let cleanHTML;
	console.log("Received message:", req.body);
	const { contactForm } = req.body;

	if (!forwardingEmail) {
		return res.status(500).send("Forwarding email is not configured");
	}

	if (!req.is("application/json")) {
		return res.status(400).send("Expected application/json");
	}

	app.use(express.json());

	if (
		!contactForm ||
		!contactForm.name ||
		!contactForm.email ||
		!contactForm.subject ||
		!contactForm.message
	) {
		cleanHTML = DOMPurify.sanitize(
			`<strong>${contactForm.name} <${contactForm.email}></strong><br><br><p>${contactForm.message}</p>`,
		);
		return res
			.status(400)
			.send("Missing required fields: name, email, subject, message");
	}

	(async () => {
		const { data, error } = await resend.emails.send({
			from: `${process.env.RESEND_NAME} <${process.env.RESEND_EMAIL}>`,
			replyTo: `${contactForm.name} <${contactForm.email}>`,
			to: [forwardingEmail],
			subject: contactForm.subject,
			text: `You have received a new message from ${contactForm.name} (${contactForm.email}):\n\n${contactForm.message}`,
			html: cleanHTML,
		});

		if (error) {
			console.error({ error });
			res.status(500).send("Failed to send email");
		} else {
			console.log("Email sent successfully:", data);
			res.status(200).send("Email sent successfully");
		}

		console.log({ data });
	})();
});
