/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero inteiro positivo
 * @param {number} b - Representa um numero inteiro positivo
 */
 
function maiorDivisorComum(a, b) {
	if( (a >= b) && (b > 0) ){
		while( a != b ){
			if( a > b )
				a = a - b;
			else
				b = b - a;
		}
	
		return a;
	}
	
}

console.log(maiorDivisorComum(300, 200));