(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero inteiro positivo
 * @param {number} b - Representa um numero inteiro positivo
 */
 
function maiorDivisorComum(a, b) {
	if( (a >= b) && (b > 0) ){
		while( b != 0 ){
			m = a % b;
			a = b;
			b = m;
		}
	
		return a;
	}
	
}

exports.maiorDivisorComum = maiorDivisorComum;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Maior divisor comum", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.maiorDivisorComum(42,7);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 7, "Correto!");
});

QUnit.test("Maior divisor comum", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.maiorDivisorComum(20,15);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5, "Correto!");
});

QUnit.test("Maior divisor comum", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.maiorDivisorComum(300,200);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 100, "Correto!");
});



},{"../codigo":1}]},{},[2]);
