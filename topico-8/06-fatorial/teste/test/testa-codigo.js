const operacao = require("../codigo");

QUnit.test("Fatorial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fatorial(3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 6, "Correto!");
});

QUnit.test("Fatorial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fatorial(7);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5040, "Correto!");
});

QUnit.test("Fatorial", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fatorial(10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3628800, "Correto!");
});

