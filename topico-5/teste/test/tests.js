(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o dia da semana de uma determinada data.
 * Serão informados o dia, mês e ano.
 * @constructor
 * @param {number} d - Representa o dia.
 * @param {number} m - Representa o mês.
 * @param {number} a - Representa o ano.
 * @returns {number} Um valor de 0 a 6, onde 0 representa segunda feira, 1 terça feira e 
 * assim sucessivamente.
 */
function diaDaSemana(d, m, a) {
	condicao = 0;
	
	if( (d <= 1 && d <= 31) && (m >= 1 && m <= 12) && (a > 1753) ){

		if( (m == 1) || (m == 2) ){
			m = m + 12;
			a = a - 1;
		}
		
		s = (d + (2*m)) + ( (3*(m+1))/5 ) + a + ((a/4)-(a/100)) + (a/400);    
		
		
		return parseInt(s) % 7;
	}
}

exports.diaDaSemana = diaDaSemana;

},{}],2:[function(require,module,exports){

const operacao = require("../codigo");
//import Library from 'some-library'; Verificar alteração

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,1,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});


QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,2,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, "Correto!");
});

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(32,5,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, undefined, "Um erro encontrado!");
});

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(25,13,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, undefined, "Um erro encontrado!");
});

},{"../codigo":1}]},{},[2]);
