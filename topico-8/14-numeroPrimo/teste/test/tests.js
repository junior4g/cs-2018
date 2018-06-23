(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} n - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel auxiliar
 */
 
function numeroPrimo(n) {
	if( n > 1 ){
		i = 2;
	}
	
	while( n > i ){
		if( ( n % i ) == 0 )
			return "falso";
		i =  i + 1;
	}
	
	return "verdadeiro";
}

exports.numeroPrimo = numeroPrimo;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Numero Primo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.numeroPrimo(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "verdadeiro", "Correto!");
});

QUnit.test("Numero Primo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.numeroPrimo(19);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "verdadeiro", "Correto!");
});

QUnit.test("Numero Primo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.numeroPrimo(588);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "falso", "Correto!");
});



},{"../codigo":1}]},{},[2]);
