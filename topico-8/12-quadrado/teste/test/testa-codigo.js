const operacao = require("../codigo");

QUnit.test("Quadrado", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(81);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Quadrado", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(79);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, false, "Correto!");
});

QUnit.test("Quadrado", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});


