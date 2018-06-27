/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} k - Representa um valor repassado ao programa
 * @param {number} numerador - Representa o numerador
 * @param {number} denominador - Representa o denominador
 * @param {number} i - Representa uma variavel de controle
 * @returns {number} - Retorna o resultado do calculo
 */

 var x = 1;
 var y = 2;
 
function logaritmo(n, k) {
	if( (n >= x) && (k >= y) ){
		i = y;
		e = x + n;
		numerador = n;
		denominador = x;
	}
	
	while( k >= i ){
		numerador = numerador * numerador;
		denominador = denominador * i;
		e = e + (numerador / denominador);
		i = i + x;
	}
	
	return e;
}

var a = 4;
var b = 2;
console.log(logaritmo(a,b));
