function santizeForm(contactForm) {
	return {
		firstName: contactForm.firstName.replace(/[\r\n]/g, ""),
		lastName: contactForm.lastName.replace(/[\r\n]/g, ""),
		email: contactForm.email.replace(/[\r\n]/g, ""),
		phone: contactForm.phone.replace(/[\r\n]/g, ""),
		subject: contactForm.subject.replace(/[\r\n]/g, ""),
		message: contactForm.message.replace(/\r/g, ""),
	};
}

module.exports = {
	santizeForm,
};
