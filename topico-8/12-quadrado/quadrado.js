/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} s - Representa uma variavel de controle
 * @param {number} i - Representa uma variavel de controle
 * @returns {boolean} - Retorna o resultado do calculo
 */
 
var a = 1;
var b = 2;
 
function quadrado(n) {
	if( n >= a ){
		i = a;
		s = a;
	}
	
	while( s < n ){
		i = i + b;
		s = s + i;
	}
	
	return (n == s);
}

var num = 4;
console.log(quadrado(num));