/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel auxiliar
 */
 
function numeroPrimo(n) {
	if( n > 1 ){
		i = 2;
	}
	
	while( n > i ){
		if( ( n % i ) == 0 )
			return "falso";
		i =  i + 1;
	}
	
	return "verdadeiro";
}

exports.numeroPrimo = numeroPrimo;