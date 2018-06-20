/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero inteiro positivo
 * @param {number} b - Representa um numero inteiro positivo
 */
 
function maiorDivisorComum(a, b) {
	if( (a >= b) && (b > 0) ){
		while( b != 0 ){
			m = a % b;
			a = b;
			b = m;
		}
	
		return a;
	}
	
}

exports.maiorDivisorComum = maiorDivisorComum;