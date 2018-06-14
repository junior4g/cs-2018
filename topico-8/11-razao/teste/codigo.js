/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa um valor repassado ao programa
 * @param {number} y - Representa um valor repassado ao programa
 * @param {number} k - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel de controle
 */
 
function razao(x, y, k) {
	if( (x >= 0) && (x < y) && (k > 0) ){
		c = y;
		a = x;
		i = 1;
	}
	
	while( k >= i ){
		t = c;
		c = c + a;
		a = t;
		i = i + 1;
	}
	
	return c / a;
}

exports.razao = razao;