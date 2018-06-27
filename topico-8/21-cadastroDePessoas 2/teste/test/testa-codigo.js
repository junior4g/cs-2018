const operacao = require("../codigo");

QUnit.test("Cadastro de pessoas", function (assert) {
  var arr = [1, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0];
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});

QUnit.test("Cadastro de pessoas", function (assert) {
  var arr = [1, 5, 7, 3, 5, 1, 9, 6, 4, 2, 1];
  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});



