/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa um valor repassado ao programa
 * @param {number} y - Representa um valor repassado ao programa
 * @param {number} k - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel de controle
 * @returns {number} - Retorna o resultado do calculo
 */
 
var a = 0;
var b = 1;
 
function razao(x, y, k) {
	if( (x >= a) && (x < y) && (k > a) ){
		c = y;
		a = x;
		i = b;
	}
	
	while( k >= i ){
		t = c;
		c = c + a;
		a = t;
		i = i + b;
	}
	
	return c / a;
}

var num1 = 1;
var num2 = 8;
var num3 = 3;
console.log(razao(num1, num2, num3));