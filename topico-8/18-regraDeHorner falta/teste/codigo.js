/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa a precisão da raiz
 * @param {number} r - Representa a raiz quadrada
 */
 
function quadrado(n, i) {
	if( n > 0 ){
		r = 1;
	}
	
	while( i >= 0 ){
		r = ( r + ( n / r ) ) / 2;
		i = i - 1;
	}
	
	return r;
}

exports.quadrado = quadrado;