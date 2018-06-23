const operacao = require("../codigo");

QUnit.test("Crivo de Eratostenes", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.crivo(73);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Crivo de Eratostenes", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.crivo(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Crivo de Eratostenes", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.crivo(10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, false, "Correto!");
});



