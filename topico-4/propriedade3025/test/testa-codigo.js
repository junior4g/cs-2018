const operacao = require("../propriedade3025");

QUnit.test("propriedade 3025", function (assert) {

  let resultado = operacao.propriedade3025(3025);
  assert.equal(resultado, true, "nao e propriedade 3025");
});

QUnit.test("não satisfaz", function (assert) {

  let resultado = operacao.propriedade3025(3024);
  assert.equal(resultado, false, "3024 não satisfaz");
});
