(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa um numero fornecido ao programa
 * @param {number} y - Representa um numero fornecido ao programa
 * @param {number} potencia - Representa o resultado do calculo
 * @param {number} a - Representa a variavel potencia na função produto
 * @param {number} b - Representa a variavel x na função produto
 * @param {number} parcela - Recebe o maior numero fornecido ao programa
 * @param {number} totalParcelas - Recebe o menor numero fornecido ao programa
 * @param {number} i - Representa um contador interno
 * @param {number} s - Representa o resultado da função produto
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

exports.potencia = potencia;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Potencia", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.potencia(2,4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 16, "Correto!");
});

QUnit.test("Potencia", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.potencia(2,10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1024, "Correto!");
});

QUnit.test("Potencia", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.potencia(2,3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 8, "Correto!");
});


},{"../codigo":1}]},{},[2]);
