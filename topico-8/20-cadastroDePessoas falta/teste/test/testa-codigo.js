const operacao = require("../codigo");

QUnit.test("Raiz quadrada", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(81,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 9.000011298790216, "Correto!");
});

QUnit.test("Raiz quadrada", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(9,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, "Correto!");
});

QUnit.test("Raiz quadrada", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.quadrado(4,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, "Correto!");
});


