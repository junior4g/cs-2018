/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa um valor repassado ao programa
 * @param {number} g - Representa um valor repassado ao programa
 * @param {number} a - Representa um valor repassado ao programa
 * @param {number} num0 - Representa uma variavel auxiliar
 * @param {number} num1 - Representa uma variavel auxiliar
 * @param {number} p - Representa uma variavel auxiliar
 * @param {number} i - Representa uma variavel auxiliar
 */
 
var num0 = 0;
var num1 = 1;
 
function regraDeHorner( x, g, a) {
	if( g >= num1 ){
		p = a*g;
		i = g - num1;
	}
	
	while( i >= num0 ){
		p = ( p * x ) + a*i;
		i = i - num1;
	}
	
	return p;
}

var x = 2;
var g = 3;
var a = 5;
console.log(regraDeHorner( x, g, a));