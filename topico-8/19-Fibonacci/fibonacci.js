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
 * @returns {number} - Retorna o resultado do calculo
 */
 
var x = 0;
var y = 1;
var z = 2;
 
function fibonacci(n) {
	if( n >= x ){
		a = x;
		c = y;
	}
	
	if( (n == x) || (n == y) )
		return n;
	
	i = z;
	
	while( n >= i ){
		t = c;
		c = c + a;
		a = t;
		i = i + z;
	}
	
	return c;
}

var num = 35;
console.log(fibonacci(num));