const operacao = require("../codigo");

QUnit.test("Numero Primo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.numeroPrimo(5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "verdadeiro", "Correto!");
});

QUnit.test("Numero Primo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.numeroPrimo(19);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "verdadeiro", "Correto!");
});

QUnit.test("Numero Primo", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.numeroPrimo(588);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, "falso", "Correto!");
});


