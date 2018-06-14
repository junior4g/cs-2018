(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa 
 */
 
function valorDePi(n) {
	if( n >= 1 ){
		i = 1;
		s = -1;
		d = -1;
		p = 0;
		
		while( n >= i ){
			d = d + 2;
			s = -1 * s;
			p = p + 4 * ( s / d );
			i = i + 1;
		}
		
		return p;
	}
}

exports.valorDePi = valorDePi;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.valorDePi(3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3.466666666666667, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.valorDePi(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3.3396825396825403, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.valorDePi(2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2.666666666666667, "Correto!");
});


},{"../codigo":1}]},{},[2]);
