/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel auxiliar
 * @param {number} t - Representa uma variavel auxiliar
 * @param {number} c - Representa o n-esimo numero de fibonacci
 * @param {number} a - Representa uma variavel auxiliar
 * @param {number} x - Representa uma variavel auxiliar
 * @param {number} y - Representa uma variavel auxiliar
 * @param {number} z - Representa uma variavel auxiliar
 * @param {number} num - Representa um valor repassado ao programa
 */
 
function regraDeHorner( x, g, a) {
	if( g >= 1 ){
		p = a;
		i = g - 1;
	}
	
	while( i >= 0 ){
		p = ( p * x ) + a;
		i = i - 1;
	}
	
	return p;
}

var x = 1;
var g = 1;
var a = 1;
console.log(regraDeHorner( x, g, a));