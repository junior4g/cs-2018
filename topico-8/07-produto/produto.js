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
 * @returns {number} - Retorna o resultado do calculo
 */

var x = 0;
var y = 1;

function produto(a, b) {
	if(( a >= x ) && ( b >= x )){
		totalParcelas = a;
		parcela = b;
	}
	if( b < a ){
		totalParcelas = b;
		parcela = a;
	}
	i = y;
	s = x;
	
	while( totalParcelas >= i ){
		s = s + parcela;
		i = i + y;
	}
	
	return s;
}

var a = 3;
var b = 10;
console.log(produto(a,b));
