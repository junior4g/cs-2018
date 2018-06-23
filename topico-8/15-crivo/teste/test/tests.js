(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Crivo de Eratostenes", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.crivo(73);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Crivo de Eratostenes", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.crivo(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Crivo de Eratostenes", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.crivo(10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, false, "Correto!");
});




},{"../codigo":1}]},{},[2]);
