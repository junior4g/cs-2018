/**
 * Representa o calculo para encontrar o resto de uma divis�o inteira.
 * Ser�o informados dois numeros.
 * @constructor
 * @param {number} n - Representa um numero fornecido ao programa
 * @param {number} f - Representa o resultado do calculo
 * @param {number} i - Representa um contador
 */

function fatorial(n) {
	if( n >= 1 ){
		i = 2;
		f = 1;
	}
	
	while( n >= i){
		f = f * i;
		i = i + 1;
	}
	
	return f;
}

exports.fatorial = fatorial;