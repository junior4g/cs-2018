const operacao = require("../codigo");

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(5,3);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(3,8);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(10,2);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});

QUnit.test("Resto da divisao inteira", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.restoDaDivisaoInteira(16,4);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});

