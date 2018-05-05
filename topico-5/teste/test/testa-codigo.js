
const operacao = require("../codigo");

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,1,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Um erro foi encontrado!");
});


QUnit.test("dia da semana 2", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(7,2,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 2, "Um erro foi encontrado!");
});