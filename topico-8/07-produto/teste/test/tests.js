(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} a - Representa um numero fornecido ao programa
 * @param {number} b - Representa um numero fornecido ao programa
 * @param {number} parcela - Recebe o maior numero fornecido ao programa
 * @param {number} totalParcelas - Recebe o menor numero fornecido ao programa
 * @param {number} i - Representa um contador interno
 * @param {number} s - Representa o resultado do calculo
 */

function produto(a, b) {
	if(( a >= 0 ) && ( b >= 0 )){
		totalParcelas = a;
		parcela = b;
	}
	if( b < a ){
		totalParcelas = b;
		parcela = a;
	}
	i = 1;
	s = 0;
	
	while( totalParcelas >= i ){
		s = s + parcela;
		i = i + 1;
	}
	
	return s;
}

exports.produto = produto;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.produto(3,10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 30, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.produto(100,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 500, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.produto(5,0);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});



},{"../codigo":1}]},{},[2]);
