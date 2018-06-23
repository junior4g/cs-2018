const operacao = require("../codigo");

QUnit.test("Razao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.razao(1,3,4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1.6363636363636365, "Correto!");
});

QUnit.test("Razao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.razao(1,4,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1.8, "Correto!");
});

QUnit.test("Razao", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.razao(1,8,3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 1.5294117647058822, "Correto!");
});

