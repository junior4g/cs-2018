/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa um numero fornecido ao programa
 * @param {number} y - Representa um numero fornecido ao programa
 * @param {number} potencia - Representa o resultado do calculo
 * @param {number} a - Representa a variavel potencia na função produto
 * @param {number} b - Representa a variavel x na função produto
 * @param {number} parcela - Recebe o maior numero fornecido ao programa
 * @param {number} totalParcelas - Recebe o menor numero fornecido ao programa
 * @param {number} i - Representa um contador interno
 * @param {number} s - Representa o resultado da função produto
 */

function produto(a, b) {
	if( a >= 0 ) && ( b >= 0 ){
		totalParcelas = a;
	}
	if( b < a ){
		totalParcelas = b;
		parcela = a;
	}
	i = 1;
	s = 0;
	
	while( totalParcelas >= i ){
		s = s + parcela;
		i = i + 1;
	}
	
	return s;
}
 
function potencia(x, y) {
	if( x >= 0 ) && ( y >= 0 ){
		potencia = 1;
	}
	
	while( y >= i ){
		potencia = produto(potencia, x);
		i = i + 1;
	}
	
	return potencia;
}

console.log(potencia(2,3));
