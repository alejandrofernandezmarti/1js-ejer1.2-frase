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
	let palabras = cadena.split(' ');
	let palabrasMayus = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase());
	return palabrasMayus.join(' ');
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
