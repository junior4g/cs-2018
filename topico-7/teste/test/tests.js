(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa o numero final para soma dos naturais.
 * @param {number} s - Representa o resultado da soma.
 * @param {number} i - Representa um contador auxiliar.
 */

function somaDosPrimeirosNaturais(n) {
	if( n >= 1 ){
		i = 2;
		s = 1;
	}
	
	while( n >= i){
		s = s + i;
		i = i + 1;
	}
	
	return s;
}

exports.somaDosPrimeirosNaturais = somaDosPrimeirosNaturais;

},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.somaDosPrimeirosNaturais(10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 55, "Correto!");
});


},{"../codigo":1}]},{},[2]);
