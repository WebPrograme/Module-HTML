let voornaam, achternaam;

function controle(input) {
	if (!input) {
		document.write('Je hebt geen naam ingegeven.<br>');
		return false;
	} else if (input === ' ') {
		document.write('Je hebt een spatie ingegeven.<br>');
		return false;
	} else if (input.length < 2) {
		document.write('Je naam is te kort.<br>');
		return false;
	}
	return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

voornaam = controle(prompt('Geef je voornaam in:'));

if (voornaam) {
	achternaam = controle(prompt('Geef je achternaam in:'));

	if (achternaam) {
		document.write('Hey ' + voornaam + ' ' + achternaam + '.');
	}
}
