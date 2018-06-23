(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} x - Representa um valor repassado ao programa
 * @param {number} y - Representa um valor repassado ao programa
 * @param {number} k - Representa um valor repassado ao programa
 * @param {number} i - Representa uma variavel de controle
 */
 
function razao(x, y, k) {
	if( (x >= 0) && (x < y) && (k > 0) ){
		c = y;
		a = x;
		i = 1;
	}
	
	while( k >= i ){
		t = c;
		c = c + a;
		a = t;
		i = i + 1;
	}
	
	return c / a;
}

exports.razao = razao;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Razao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.razao(1,3,4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1.6363636363636365, "Correto!");
});

QUnit.test("Razao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.razao(1,4,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1.8, "Correto!");
});

QUnit.test("Razao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.razao(1,8,3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1.5294117647058822, "Correto!");
});


},{"../codigo":1}]},{},[2]);
