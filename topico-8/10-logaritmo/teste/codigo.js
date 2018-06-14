/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} k - Representa um valor repassado ao programa
 * @param {number} numerador - Representa o numerador
 * @param {number} denominador - Representa o denominador
 * @param {number} i - Representa uma variavel de controle
 */
 
function logaritmo(n, k) {
	if( (n >= 1) && (k >= 2) ){
		i = 2;
		e = 1 + n;
		numerador = n;
		denominador = 1;
	}
	
	while( k >= i ){
		numerador = numerador * numerador;
		denominador = denominador * i;
		e = e + (numerador / denominador);
		i = i + 1;
	}
	
	return e
}

exports.logaritmo = logaritmo;