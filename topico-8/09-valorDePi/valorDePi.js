/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} num - Representa um numero fornecido ao programa
 * @param {number} x - Representa um numero fornecido ao programa
 * @param {number} y - Representa um numero fornecido ao programa
 * @param {number} z - Representa um numero fornecido ao programa
 * @param {number} w - Representa um numero fornecido ao programa
 * @param {number} r - Representa um numero fornecido ao programa
 * @returns {number} - Retorna o resultado do calculo
 */
 
var x = 0;
var y = 1;
var z = -1;
var w = 2;
var r = 4;
 
function valorDePi(n) {
	if( n >= y ){
		i = y;
		s = z;
		d = z;
		p = x;
		
		while( n >= i ){
			d = d + w;
			s = z * s;
			p = p + r * ( s / d );
			i = i + y;
		}
		
		return p;
	}
}

var num = 2;
console.log(valorDePi(num));
