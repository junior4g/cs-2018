(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divis�o inteira.
 * Ser�o informados dois numeros.
 * @constructor
 * @param {number} n - Representa um numero fornecido ao programa
 * @param {number} f - Representa o resultado do calculo
 * @param {number} i - Representa um contador
 */

function fatorial(n) {
	if( n >= 1 ){
		i = 2;
		f = 1;
	}
	
	while( n >= i){
		f = f * i;
		i = i + 1;
	}
	
	return f;
}

exports.fatorial = fatorial;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Fatorial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fatorial(3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 6, "Correto!");
});

QUnit.test("Fatorial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fatorial(7);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5040, "Correto!");
});

QUnit.test("Fatorial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fatorial(10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3628800, "Correto!");
});


},{"../codigo":1}]},{},[2]);
