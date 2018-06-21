/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa a precisão da raiz
 * @param {number} r - Representa a raiz quadrada
 */
 
var a = 0;
var b = 1;
var c = 2;
 
function quadrado(n, i) {
	if( n > a ){
		r = b;
	}
	
	while( i >= a ){
		r = ( r + ( n / r ) ) / c;
		i = i - b;
	}
	
	return r;
}

var num1 = 49;
var num2 = 5;
console.log(quadrado(num1, num2));