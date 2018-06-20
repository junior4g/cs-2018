const operacao = require("../codigo");

QUnit.test("Maior divisor comum", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.maiorDivisorComum(42,7);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 7, "Correto!");
});

QUnit.test("Maior divisor comum", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.maiorDivisorComum(20,15);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5, "Correto!");
});

QUnit.test("Maior divisor comum", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.maiorDivisorComum(300,200);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 100, "Correto!");
});


