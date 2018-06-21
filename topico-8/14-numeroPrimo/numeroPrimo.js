/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel auxiliar
 * @param {number} a - Representa uma variavel auxiliar
 * @param {number} b - Representa uma variavel auxiliar
 * @param {number} c - Representa uma variavel auxiliar
 */
 
var a = 0;
var b = 1;
var c = 2;
 
function numeroPrimo(n) {
	if( n > b ){
		i = c;
	}
	
	while( n > i ){
		if( ( n % i ) == a )
			return "falso";
		i =  i + b;
	}
	
	return "verdadeiro";
}

var num1 = 113;
console.log(numeroPrimo(num1));