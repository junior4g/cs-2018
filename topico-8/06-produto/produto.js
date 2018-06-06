/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero fornecido ao programa
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

console.log(produto(2,3));
