/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero fornecido ao programa
 * @param {number} b - Representa um numero fornecido ao programa
 * @param {number} parcela - Recebe o maior numero fornecido ao programa
 * @param {number} totalParcelas - Recebe o menor numero fornecido ao programa
 * @param {number} i - Representa um contador interno
 * @param {number} s - Representa o resultado do calculo
 */

function produto(a, b) {
	if(( a >= 0 ) && ( b >= 0 )){
		totalParcelas = a;
		parcela = b;
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

console.log(produto(3,10));
