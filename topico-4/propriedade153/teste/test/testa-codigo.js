

const operacao = require("../codigo");



QUnit.test("propriedade 153", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.propriedade153(153);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "nao e propriedade 153");
});
