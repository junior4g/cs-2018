(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Representa o calculo para encontrar o resto de uma divisão inteira.
 * Serão informados dois numeros.
 * @constructor
 * @param {number} arr - Representa um array com o numero de cpf
 * @param {number} soma - Representa uma variavel auxiliar que verificar se o array contem 11 valores validos.
 * @param {number} dj - Representa o resultado do calculo que será comparado com o digito 10 do cpf
 * @param {number} dk - Representa o resultado do calculo que será comparado com o digito 11 do cpf
 */
 
function cpf(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11) {
	var arr = [ n2, n3, n4, n5, n6, n7, n8, n9, n10, n11];
	/*arguments[0] = n1;
	arguments[1] = n2;
	arguments[2] = n3;
	arguments[3] = n4;
	arguments[4] = n5;
	arguments[5] = n6;
	arguments[6] = n7;
	arguments[7] = n8;
	arguments[8] = n9;
	arguments[9] = n10;
	arguments[10] = n11;*/
	console.log(n1);
	
	var soma = 0;
	for (var i = 0; i < arguments.length; i++) {
		if( arguments[i] >= 0 )
			soma++;
	}
	if( soma == 11 ){
		j = arguments[1] + (2*arguments[2]) + (3*arguments[3]) + (4*arguments[4]) + (5*arguments[5]) + (6*arguments[6]) + (7*arguments[7]) + (8*arguments[8]) + (9*arguments[9]);
		k = arguments[2] + (2*arguments[3]) + (3*arguments[4]) + (4*arguments[5]) + (5*arguments[6]) + (6*arguments[7]) + (7*arguments[8]) + (8*arguments[9]) + (9*arguments[10]);
		
		dj = ( ( j % 11 ) % 10 );
		dk = ( ( k % 11 ) % 10 );
		
		return ( dj == arguments[10]) || ( dk == arguments[11]);
	}
	
}

exports.cpf = cpf;
},{}],2:[function(require,module,exports){
const operacao = require("../codigo");

/*QUnit.test("Raiz quadrada", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr)(81,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 9.000011298790216, "Correto!");
}); */

QUnit.test("Validar CPF", function (assert) {
  //var arr = [1, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf(9, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0 );

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Validar CPF", function (assert) {
  //var arr = [1, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf( 0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0 );

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});





},{"../codigo":1}]},{},[2]);
