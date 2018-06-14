const operacao = require("../codigo");

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.produto(3,10);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 30, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.produto(100,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 500, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.produto(5,0);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});


