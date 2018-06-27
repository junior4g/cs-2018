/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um numero fornecido ao programa
 * @param {number} f - Representa o resultado do calculo
 * @param {number} i - Representa um contador
 * @param {number} num - Representa um numero fornecido ao programa
 * @param {number} x - Representa uma variavel auxiliar
 * @param {number} y - Representa uma variavel auxiliar
 * @returns {number} - Retorna o resultado do calculo
 */
var x = 1;
var y = 2;

function fatorial(n) {
	if( n >= x ){
		i = y;
		f = x;
	}
	
	while( n >= i){
		f = f * i;
		i = i + x;
	}
	
	return f;
}
var num = 4;
console.log(fatorial(num));
