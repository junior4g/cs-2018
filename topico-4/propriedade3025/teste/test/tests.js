(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

function propriedade3025(n) {
    if( n>0 && n<= 9999){
        i = n / 100;
        j = n % 100;
    }
    return (parseInt(i) + j) * (parseInt(i) + j) == n;
}

exports.propriedade3025 = propriedade3025;

},{}],2:[function(require,module,exports){


const operacao = require("../codigo");



QUnit.test("propriedade 3025", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.propriedade3025(3025);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "nao e propriedade 3025");
});

},{"../codigo":1}]},{},[2]);
