(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

function propriedade153(cdu) {
    if( cdu >= 0 && cdu <= 9999 ){
        c = cdu / 100;
        du = cdu % 100;
        d = du / 10;
        u = du % 10;
    }
    return ( Math.pow(parseInt(c), 3) + Math.pow(parseInt(d), 3) + Math.pow(parseInt(u), 3) == cdu );
}

exports.propriedade153 = propriedade153;

},{}],2:[function(require,module,exports){


const operacao = require("../codigo");



QUnit.test("propriedade 153", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.propriedade153(153);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "nao e propriedade 153");
});

},{"../codigo":1}]},{},[2]);
