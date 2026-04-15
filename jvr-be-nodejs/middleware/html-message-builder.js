const { JSDOM } = require("jsdom");
const createDOMPurify = require("dompurify");
const { window } = new JSDOM("");
const DOMPurify = createDOMPurify(window);

function buildHtmlMessage(contactForm) {
	return DOMPurify.sanitize(`
        <!DOCTYPE html>
        <html style="height:100%" dir="ltr" lang="en">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>New Contact Form Submission</title>
        </head>
        <body style="white-space: pre-line; font-family: Arial, sans-serif; line-height: 1.5;">
            <h2>Contact Form Submission - ${contactForm.subject}</h2>
            <h3>${contactForm.firstName} ${contactForm.lastName}</h3>
            <h4>${contactForm.email}</h4>
            <h4>${contactForm.phone}</h4>
            <br>
            <p>${contactForm.message.replace(/\n/g, "<br>")}</p>
        </body>
        </html>
    `);
}

module.exports = {
    buildHtmlMessage,
};
