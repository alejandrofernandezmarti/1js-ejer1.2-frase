'use strict'

function letters(cadena) {
	return cadena.length;

}

function words(cadena) {
	return cadena.split(' ').length;
}

function upperString(cadena) {
	return cadena.toUpperCase();
}

function titleString(cadena) {
	let frase = cadena.split(' ');
	for (let i = 0; i <= frase.length ; i++) {
		 let final = frase[i].substr(0,1).toUpperCase();
		 let mayus = frase[i].substr(1);
		 frase[i] = mayus + final;
	}
	return frase.join(' ');

}

function backwardsLetters(cadena) {
	return cadena.split('').reverse().join('');
}

function backwardsWords(cadena) {
return cadena.split(' ').reverse().join(' ');
}

function palindromo(cadena) {
    let cadenaReves = backwardsLetters(cadena).replaceAll(' ','').toLowerCase();
	return cadenaReves ===  cadena.replaceAll(' ','').toLowerCase();


}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindromo
}
