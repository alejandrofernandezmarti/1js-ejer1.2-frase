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
	let frase = "Una cadena para probar"
	frase = cadena.split(' ');
	for (let i = 0; i <= frase.length ; i++) {
		 let final = frase[i].substring(0,1).toUpperCase();
		 let mayus = frase[i].substring(1);
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
    let cadenaReves = cadena.split(' ').reverse().join('').replaceAll(' ','');
	let cadenaDerecho = cadena.split(' ').join('').replaceAll(' ','');
	return cadenaReves === cadenaDerecho;
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
