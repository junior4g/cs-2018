/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa o numero final para soma dos naturais.
 * @param {number} s - Representa o resultado da soma.
 * @param {number} i - Representa um contador auxiliar.
 */

function somaDosPrimeirosNaturais(n) {
	if( n >= 1 ){
		i = 2;
		s = 1;
	}
	
	while( n >= i){
		s = s + i;
		i = i + 1;
	}
	
	return s;
}

console.log(somaDosPrimeirosNaturais(10));
