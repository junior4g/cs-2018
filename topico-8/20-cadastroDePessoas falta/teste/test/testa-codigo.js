const operacao = require("../codigo");

/*QUnit.test("Raiz quadrada", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.cpf.apply(null, arr)(81,5);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, 9.000011298790216, "Correto!");
}); */

QUnit.test("Raiz quadrada", function (assert) {

  // Executa a operação que desejamos testar
  let resultado = operacao.cpf(arr = [0, 2, 3, 1, 2, 7, 7, 9, 1, 1, 0]);

  // Verifica se o resultado produzido é o esperado.
  assert.equal(resultado, true, "Correto!");
});



