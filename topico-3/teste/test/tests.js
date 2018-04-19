(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// Função que retorna a soma dos argumentos fornecidos.
// Espera-se que esta função seja usada não apenas neste
// arquivo, mas também por meio de chamadas contidas em
// outros arquivos. Em consequência, exportamos
// a função (exports) ao criar um módulo.

function AlphabetSoup(str) { 

  // converte a string em uma matriz de caracteres
  var chars = str.split("");

  // ordena em ordem alfabetica
  var sorted = chars.sort();
  
  console.log(sorted);

  // retorna a string ordenada
  return sorted.join("");    
}

// module.exports é a referência para o objeto retornado
// por chamadas require(). Em vez da opção abaixo é usada
// outra forma, considerada mais segura e recomendada.
// module.exports.soma = soma;

exports.AlphabetSoup = AlphabetSoup;

},{}],2:[function(require,module,exports){

// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

const operacao = require("../codigo");

// Abaixo segue o nosso primeiro teste
// identificado por "soma trivial".

QUnit.test("soma trivial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.soma(3, -1);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, "soma incorreta");
});

},{"../codigo":1}]},{},[2]);
