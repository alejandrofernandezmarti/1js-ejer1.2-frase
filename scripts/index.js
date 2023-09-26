'use strict'
import {backwardsLetters, backwardsWords, letters, palindromo, titleString, upperString, words} from "./functions";

let cadena = prompt("Introduce una cadena")

console.log(cadena)
console.log(letters(cadena) + " letras y "+words(cadena) + " palabras")
console.log(upperString(cadena))
console.log(titleString(cadena))
console.log(backwardsLetters(cadena))
console.log(backwardsWords(cadena))
console.log(palindromo(cadena))


