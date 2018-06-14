(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} k - Representa um valor repassado ao programa
 * @param {number} numerador - Representa o numerador
 * @param {number} denominador - Representa o denominador
 * @param {number} i - Representa uma variavel de controle
 */
 
function logaritmo(n, k) {
	if( (n >= 1) && (k >= 2) ){
		i = 2;
		e = 1 + n;
		numerador = n;
		denominador = 1;
	}
	
	while( k >= i ){
		numerador = numerador * numerador;
		denominador = denominador * i;
		e = e + (numerador / denominador);
		i = i + 1;
	}
	
	return e
}

exports.logaritmo = logaritmo;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.logaritmo(2,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.logaritmo(3,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 8.5, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.logaritmo(4,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 13, "Correto!");
});



},{"../codigo":1}]},{},[2]);
