/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa 
 */
 
function valorDePi(n) {
	if( n >= 1 ){
		i = 1;
		s = -1;
		d = -1;
		p = 0;
		
		while( n >= i ){
			d = d + 2;
			s = -1 * s;
			p = p + 4 * ( s / d );
			i = i + 1;
		}
		
		return p;
	}
}

console.log(valorDePi(2));
