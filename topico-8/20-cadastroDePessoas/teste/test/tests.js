(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} dj - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} dk - Representa o resultado do calculo que será comparado com o digito 11 do cpf
 * @param {number} num0 - Representa uma variavel auxiliar
 * @param {number} num1 - Representa uma variavel auxiliar
 * @param {number} num2 - Representa uma variavel auxiliar
 * @param {number} num3 - Representa uma variavel auxiliar
 * @param {number} num4 - Representa uma variavel auxiliar
 * @param {number} num5 - Representa uma variavel auxiliar
 * @param {number} num6 - Representa uma variavel auxiliar
 * @param {number} num7 - Representa uma variavel auxiliar
 * @param {number} num8 - Representa uma variavel auxiliar
 * @param {number} num9 - Representa uma variavel auxiliar
 * @param {number} num10 - Representa uma variavel auxiliar
 * @param {number} num11 - Representa uma variavel auxiliar
 */

var num0 = 0, num1 = 1, num2 = 2, num3 = 3, num4 = 4, num5 = 5, num6 = 6, num7 = 7, num8 = 8, num9 = 9, num10 = 10, num11 = 11; 

//var arr = [num0, num2, num3, num1, num2, num7, num7, num9, num1, num1, num0];
//cpf.apply(null, arr); 

function cpf() {
	var soma = num0;
	for (var i = num0; i < arguments.length; i++) {
		if( arguments[i] >= num0 )
			soma++;
	}
	if( soma == num11 ){
		//j = arguments[1] + (2*arguments[2]) + (3*arguments[3]) + (4*arguments[4]) + (5*arguments[5]) + (6*arguments[6]) + (7*arguments[7]) + (8*arguments[8]) + (9*arguments[9]);
		j = arguments[num1] + (num2*arguments[num2]) + (num3*arguments[num3]) + (num4*arguments[num4]) + (num5*arguments[num5]) + (num6*arguments[num6]) + (num7*arguments[num7]) + (num8*arguments[num8]) + (num9*arguments[num9]);
		
		//k = arguments[2] + (2*arguments[3]) + (3*arguments[4]) + (4*arguments[5]) + (5*arguments[6]) + (6*arguments[7]) + (7*arguments[8]) + (8*arguments[9]) + (9*arguments[10]);
		k = arguments[num2] + (num2*arguments[num3]) + (num3*arguments[num4]) + (num4*arguments[num5]) + (num5*arguments[num6]) + (num6*arguments[num7]) + (num7*arguments[num8]) + (num8*arguments[num9]) + (num9*arguments[num10])
		
		dj = ( ( j % num11 ) % num10 );
		dk = ( ( k % num11 ) % num10 );
		
		return ( dj == arguments[num10]) || ( dk == arguments[num11]);
	}
	
}

exports.cpf = cpf;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

QUnit.test("Validar CPF", function (assert) {
  var arr = [0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
	//console.log(cpf.apply(null, arr)); 
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});


QUnit.test("Validar CPF", function (assert) {
  var arr = [9, 4, 6, 2, 6, 5, 6, 9, 0, 8, 0];
	//console.log(cpf.apply(null, arr)); 
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});







},{"../codigo":1}]},{},[2]);
