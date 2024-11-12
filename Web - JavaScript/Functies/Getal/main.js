'use strict';

let getallen = [];

let aantal = prompt('Hoeveel getallen wil je ingeven?');
aantal = controleAantal(aantal);

if (aantal !== false) {
	for (let i = 0; i < aantal; i++) {
		let getal = prompt(`Geef getal (${i + 1}) in:`);
		getallen.push(controleGetal(getal));
	}
	document.write('De ingegeven getallen zijn: ' + getallen.join(', '));
}

function controleAantal(aantal) {
	if (aantal === null) {
		document.write('U hebt geannuleerd.');
		return false;
	} else if (aantal.trim() === '') {
		document.write('U heeft niets ingegeven.');
		return false;
	} else if (!isNaN(aantal) && aantal > 0) {
		return Number(aantal);
	} else {
		document.write('Dit is geen correcte ingave.');
		return false;
	}
}

function controleGetal(getal) {
	if (getal === null || getal.trim() === '' || isNaN(getal)) {
		return 'fout';
	} else {
		return Number(getal);
	}
}
