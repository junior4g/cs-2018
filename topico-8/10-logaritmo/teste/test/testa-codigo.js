const operacao = require("../codigo");

QUnit.test("Logaritmo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.logaritmo(2,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5, "Correto!");
});

QUnit.test("Logaritmo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.logaritmo(3,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 8.5, "Correto!");
});

QUnit.test("Logaritmo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.logaritmo(4,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 13, "Correto!");
});


