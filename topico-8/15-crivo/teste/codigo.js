/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} a - Representa um array
 * @param {number} i - Representa uma variavel auxiliar
 * @param {number} multiplo - Representa uma variavel auxiliar
 * @param {number} x - Representa uma variavel auxiliar
 * @param {number} y - Representa uma variavel auxiliar
 * @param {number} z - Representa uma variavel auxiliar
 * @param {number} num - Representa um valor que será testado
 */

 var x = 0;
 var y = 1;
 var z = 2;
 
function crivo(n){
    a = new Array(n);
    var i;
    for( i = x; i <= n; i++ ){
        a[i] = x;
    }
	
    var limite = Math.sqrt(n);
    var multiplo;
	
    for( i = z; i <= limite; i++){
        if( a[i] == x ){
            multiplo = i + i;
            while( multiplo <= n ){
                a[multiplo] = y;
                multiplo += i;
            }
        }
    }
    if( a[n] == x ){
        return true;
    }
    return false;
}

exports.crivo = crivo;