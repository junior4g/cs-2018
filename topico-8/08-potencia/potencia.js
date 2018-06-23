/**
 * Representa o calculo para encontrar o resto de uma divis�o inteira.
 * Ser�o informados dois numeros.
 * @constructor
 * @param {number} x - Representa um numero fornecido ao programa
 * @param {number} y - Representa um numero fornecido ao programa
 * @param {number} potencia - Representa o resultado do calculo
 * @param {number} a - Representa a variavel potencia na fun��o produto
 * @param {number} b - Representa a variavel x na fun��o produto
 * @param {number} parcela - Recebe o maior numero fornecido ao programa
 * @param {number} totalParcelas - Recebe o menor numero fornecido ao programa
 * @param {number} i - Representa um contador interno
 * @param {number} s - Representa o resultado da fun��o produto
 */

 var num1 = 0;
 var num2 = 1;
 var num3 = -1;
 
function produto(a,b){
    if(a < num1 || b < num1){
        return num2;
    }
    var totalParcelas = a;
    var parcela = b;
    if(b < a){
        totalParcelas = b;
        parcela = a;
    }
    var i = num2;
    var s = num1;
    while(i <= totalParcelas){
        s += parcela;
        i++;
    }
    return s;
}

function potencia(x,y){
    if(x < num1 || y < num1){
        return num3;
    }
    var potencia = num2;
    var i = num2;
    while(i <= y){
        potencia = produto(potencia, x);
        i++;
    }
    return potencia;
}

var x = 2;
var y = 4;
console.log(potencia(x,y));