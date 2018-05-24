/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa o dividendo.
 * @param {number} y - Representa o divisor.
 * @param {number} s - Representa o resto da divisão inteira.
 */

function restoDaDivisaoInteira(x,y) {
	if( y >= 0 && x > 0 ){
		s = x;  
	}
	
	while( y <= s ){
		s = s - y;
	}
	
	return s;
}

console.log(restoDaDivisaoInteira(0,4));
