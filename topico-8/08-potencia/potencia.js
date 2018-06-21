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
 
function potencia(x, y) {
	if(( x >= x ) && ( y >= x )){
		potencia = y;
		i = y;
	}
	
	while( y >= i ){
		potencia = produto(potencia, x);
		i = i + y;
	}
	
	return potencia;
}

var a = 2;
var b = 3;
console.log(potencia(a,b));
