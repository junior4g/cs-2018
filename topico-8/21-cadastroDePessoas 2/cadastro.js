/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} j - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} k - Representa o resultado do calculo que será comparado com o digito 11 do cpf
 * @param {number} a - Representa uma variavel de auxiliar
 * @param {number} b - Representa uma variavel de auxiliar
 * @param {number} num0 - Representa uma variavel auxiliar
 * @param {number} num1 - Representa uma variavel auxiliar
 * @param {number} num2 - Representa uma variavel auxiliar
 * @param {number} num3 - Representa uma variavel auxiliar
 * @param {number} num4 - Representa uma variavel auxiliar
 * @param {number} num5 - Representa uma variavel auxiliar
 * @param {number} num6 - Representa uma variavel auxiliar
 * @param {number} num7 - Representa uma variavel auxiliar
 * @param {number} num8 - Representa uma variavel auxiliar
 * @param {number} num9 - Representa uma variavel auxiliar
 * @param {number} num10 - Representa uma variavel auxiliar
 * @param {number} num11 - Representa uma variavel auxiliar
 * @returns {boolean} - Retorna o resultado do calculo
 */

var num0 = 0, num1 = 1, num2 = 2, num3 = 3, num4 = 4, num5 = 5, num6 = 6, num7 = 7, num8 = 8, num9 = 9, num10 = 10, num11 = 11; 
var a = 0;
var b = 1;
 
function cpf() {
	var soma = a;
	for (var i = a; i < arguments.length; i++) {
		if( arguments[i] >= a )
			soma++;
	}
	if( soma == num11 ){
		c = num8;
		p = arguments[num9];
		s = arguments[num9];
		
		while( c >= b ){
			p = p + arguments[c];
			s = s + p;
			c = c - b;
		}
		
		j = ( ( s % num11 ) % num10 );
		k = ( ( (s-p+(num9*arguments[num10]) % num11 ) % num10 ) );
		
		return ( j == arguments[num10]) || ( k == arguments[num11]);
	}
	
}

var arr = [num0, num2, num3, num1, num2, num7, num7, num9, num1, num1, num0];
console.log(cpf.apply(null, arr)); 