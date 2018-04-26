

const operacao = require("../codigo");



QUnit.test("propriedade 3025", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.propriedade3025(3025);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "nao e propriedade 3025");
});
