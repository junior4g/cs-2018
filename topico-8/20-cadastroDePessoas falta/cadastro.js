/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} dj - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} dk - Representa o resultado do calculo que será comparado com o digito 11 do cpf
 */
 
function cpf() {
	var soma = 0;
	for (var i = 0; i < arguments.length; i++) {
		if( arguments[i] >= 0 )
			soma++;
	}
	if( soma == 11 ){
		j = arguments[1] + (2*arguments[2]) + (3*arguments[3]) + (4*arguments[4]) + (5*arguments[5]) + (6*arguments[6]) + (7*arguments[7]) + (8*arguments[8]) + (9*arguments[9]);
		k = arguments[2] + (2*arguments[3]) + (3*arguments[4]) + (4*arguments[5]) + (5*arguments[6]) + (6*arguments[7]) + (7*arguments[8]) + (8*arguments[9]) + (9*arguments[10]);
		
		dj = ( ( j % 11 ) % 10 );
		dk = ( ( k % 11 ) % 10 );
		
		return ( dj == arguments[10]) || ( dk == arguments[11]);
	}
	
}

var arr = [0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
console.log(cpf.apply(null, arr)); 