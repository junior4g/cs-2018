const operacao = require("../codigo");

QUnit.test("Valor de PI", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.somaDosPrimeirosNaturais(00);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 00, "Correto!");
});

