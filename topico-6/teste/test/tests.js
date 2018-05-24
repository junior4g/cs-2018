(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa o dividendo.
 * @param {number} y - Representa o divisor.
 * @param {number} s - Representa o resto da divisão inteira.
 */

function restoDaDivisaoInteira(x,y) {
	if( y >= 0 && x > 0 ){
		s = x;  
	}
	
	while( y <= s ){
		s = s - y;
	}
	
	return s;
}

exports.restoDaDivisaoInteira = restoDaDivisaoInteira;

},{}],2:[function(require,module,exports){


const operacao = require("../codigo");



QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(5,3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(3,8);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(10,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(16,4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});


},{"../codigo":1}]},{},[2]);
