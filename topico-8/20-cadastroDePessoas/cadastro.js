/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} dj - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} dk - Representa o resultado do calculo que será comparado com o digito 11 do cpf
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
 */

var num0 = 0, num1 = 1, num2 = 2, num3 = 3, num4 = 4, num5 = 5, num6 = 6, num7 = 7, num8 = 8, num9 = 9, num10 = 10, num11 = 11; 

function cpf() {
	var soma = num0;
	for (var i = num0; i < arguments.length; i++) {
		if( arguments[i] >= num0 )
			soma++;
	}
	if( soma == num11 ){
		j = arguments[num1] + (num2*arguments[num2]) + (num3*arguments[num3]) + (num4*arguments[num4]) + (num5*arguments[num5]) + (num6*arguments[num6]) + (num7*arguments[num7]) + (num8*arguments[num8]) + (num9*arguments[num9]);
		
		k = arguments[num2] + (num2*arguments[num3]) + (num3*arguments[num4]) + (num4*arguments[num5]) + (num5*arguments[num6]) + (num6*arguments[num7]) + (num7*arguments[num8]) + (num8*arguments[num9]) + (num9*arguments[num10])
		
		dj = ( ( j % num11 ) % num10 );
		dk = ( ( k % num11 ) % num10 );
		
		return ( dj == arguments[num10]) || ( dk == arguments[num11]);
	}
	
}

var arr = [num0, num2, num3, num1, num2, num7, num7, num9, num1, num1, num0];
console.log(cpf.apply(null, arr)); 