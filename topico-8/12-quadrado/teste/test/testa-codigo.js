const operacao = require("../codigo");

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(81);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 81, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(79);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 81, "Correto!");
});

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 4, "Correto!");
});


