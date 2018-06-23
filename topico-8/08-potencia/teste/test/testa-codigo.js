const operacao = require("../codigo");

QUnit.test("Potencia", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.potencia(2,4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 16, "Correto!");
});

QUnit.test("Potencia", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.potencia(2,10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1024, "Correto!");
});

QUnit.test("Potencia", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.potencia(2,3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 8, "Correto!");
});

