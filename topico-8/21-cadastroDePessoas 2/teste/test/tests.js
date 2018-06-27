(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} j - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} k - Representa o resultado do calculo que será comparado com o digito 11 do cpf
 */

//var arr = [0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
//cpf.apply(null, arr); 
 
function cpf() {
	var soma = 0;
	for (var i = 0; i < arguments.length; i++) {
		if( arguments[i] >= 0 )
			soma++;
	}
	if( soma == 11 ){
		c = 8;
		p = arguments[9];
		s = arguments[9];
		
		while( c >= 1 ){
			p = p + arguments[c];
			s = s + p;
			c = c - 1;
		}
		
		j = ( ( s % 11 ) % 10 );
		k = ( ( (s-p+(9*arguments[10]) % 11 ) % 10 ) );
		
		return ( j == arguments[10]) || ( k == arguments[11]);
	}
	
}

exports.cpf = cpf;


},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Cadastro de pessoas", function (assert) {
  var arr = [1, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Cadastro de pessoas", function (assert) {
  var arr = [1, 5, 7, 3, 5, 1, 9, 6, 4, 2, 1];
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});




},{"../codigo":1}]},{},[2]);
