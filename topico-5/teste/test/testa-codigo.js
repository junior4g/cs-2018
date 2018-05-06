
const operacao = require("../codigo");

QUnit.test("dia da semana 1", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,1,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Um erro foi encontrado!");
});


QUnit.test("dia da semana 2", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,2,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, "Um erro foi encontrado!");
});