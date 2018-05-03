
const operacao = require("../codigo");

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,1,2000);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Um erro foi encontrado!");
});
