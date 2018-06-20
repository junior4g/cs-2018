/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel auxiliar
 * @param {number} t - Representa uma variavel auxiliar
 * @param {number} c - Representa o n-esimo numero de fibonacci
 * @param {number} a - Representa uma variavel auxiliar
 */
 
function fibonacci(n) {
	if( n >= 0 ){
		a = 0;
		c = 1;
	}
	
	if( (n == 0) || (n == 1) )
		return n;
	
	i = 2;
	
	while( n >= i ){
		t = c;
		c = c + a;
		a = t;
		i = i + 1;
	}
	
	return c;
}

exports.fibonacci = fibonacci;