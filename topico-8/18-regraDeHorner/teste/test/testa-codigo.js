const operacao = require("../codigo");

QUnit.test("Regra de Horner", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.regraDeHorner();

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 000, "Correto!");
});

