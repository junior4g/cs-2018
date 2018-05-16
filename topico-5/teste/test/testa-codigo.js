
const operacao = require("../codigo");

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,1,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 0, "Correto!");
});


QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(1,2,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 3, "Correto!");
});

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(32,5,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, undefined, "Um erro encontrado!");
});

QUnit.test("dia da semana", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.diaDaSemana(25,13,2018);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, undefined, "Um erro encontrado!");
});
