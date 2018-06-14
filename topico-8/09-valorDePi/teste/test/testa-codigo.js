const operacao = require("../codigo");

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.valorDePi(3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3.466666666666667, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.valorDePi(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3.3396825396825403, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.valorDePi(2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2.666666666666667, "Correto!");
});

