const operacao = require("../codigo");

QUnit.test("Validar CPF", function (assert) {
  var arr = [0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];

  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});


QUnit.test("Validar CPF", function (assert) {
  var arr = [9, 4, 6, 2, 6, 5, 6, 9, 0, 8, 0];

  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});






