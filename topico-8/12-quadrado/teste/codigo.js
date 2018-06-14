/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} s - Representa uma variavel de controle
 * @param {number} i - Representa uma variavel de controle
 */
 
function quadrado(n) {
	if( n >= 1 ){
		i = 1;
		s = 1;
	}
	
	while( s < n ){
		i = i + 2;
		s = s + i;
	}
	
	return n = s;
}

exports.quadrado = quadrado;