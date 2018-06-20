(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel auxiliar
 * @param {number} t - Representa uma variavel auxiliar
 * @param {number} c - Representa o n-esimo numero de fibonacci
 * @param {number} a - Representa uma variavel auxiliar
 */
 
function fibonacci(n) {
	if( n >= 0 ){
		a = 0;
		c = 1;
	}
	
	if( (n == 0) || (n == 1) )
		return n;
	
	i = 2;
	
	while( n >= i ){
		t = c;
		c = c + a;
		a = t;
		i = i + 1;
	}
	
	return c;
}

exports.fibonacci = fibonacci;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Fibonacci", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fibonacci(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5, "Correto!");
});

QUnit.test("Fibonacci", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fibonacci(15);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 610, "Correto!");
});

QUnit.test("Fibonacci", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fibonacci(35);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 9227465, "Correto!");
});



},{"../codigo":1}]},{},[2]);
