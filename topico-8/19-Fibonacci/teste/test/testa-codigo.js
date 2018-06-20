const operacao = require("../codigo");

QUnit.test("Fibonacci", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fibonacci(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 5, "Correto!");
});

QUnit.test("Fibonacci", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fibonacci(15);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 610, "Correto!");
});

QUnit.test("Fibonacci", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.fibonacci(35);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 9227465, "Correto!");
});


