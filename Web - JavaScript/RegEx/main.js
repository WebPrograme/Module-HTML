'use strict';

function vraagEmail() {
	let email = prompt('Geef uw email in:');
	let isValid = controleerEmail(email);
	if (isValid) {
		document.write('De email is geldig.');
	} else {
		document.write('De email is niet geldig.');
	}
}

function controleerEmail(email) {
	if (!email) return false;

	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

	if (!emailRegex.test(email)) return false;

	if (email.startsWith('.') || email.startsWith('-') || email.endsWith('.') || email.endsWith('-')) return false;
	if (email.includes('@.')) return false;

	return true;
}

vraagEmail();
