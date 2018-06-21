/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} j - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} k - Representa o resultado do calculo que será comparado com o digito 11 do cpf
 */

function cpf() {
	var soma = 0;
	for (var i = 0; i < arguments.length; i++) {
		if( arguments[i] >= 0 )
			soma++;
	}
	if( soma == 11 ){
		c = 8;
		p = arguments[9];
		s = arguments[9];
		
		while( c >= 1 ){
			p = p + arguments[c];
			s = s + p;
			c = c - 1;
		}
		
		j = ( ( s % 11 ) % 10 );
		k = ( ( (s-p+(9*arguments[10]) % 11 ) % 10 ) );
		
		return ( j == arguments[10]) || ( k == arguments[11]);
	}
	
}

var arr = [0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
console.log(cpf.apply(null, arr)); 