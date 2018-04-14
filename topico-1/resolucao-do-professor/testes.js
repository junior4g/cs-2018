const funcao = require("../dia-da-semana-alternativo");

function diasNoMes(ano, mes) {
    return new Date(ano, mes, 0).getDate();
}

function esperado(d, m, a) {
    let diaSemana = new Date(a, m - 1, d).getDay();

    // Mapeia dom 0, seg 1, ter 2, ... para
    //        dom 6, seg 0, ter 1, ...
    return (diaSemana + 6) % 7;
}

QUnit.test("todos os dias de 1967", function(assert) {
   const ano = 2000;
   for (let mes = 1; mes <= 12; mes++) {
       let dias = diasNoMes(ano, mes);
       for (let dia = 1; dia <= dias; dia++) {
           let correto = esperado(dia, mes, ano);
           let obtido = funcao.diaDaSemana(dia, mes, ano, 2000, 22, 2, 2018, 3);
           assert.equal(obtido, correto);
       }
   }
});

QUnit.test("Outro teste", function(assert) {//Cenario que teoricamente falha
   let obtido = funcao.diaDaSemana(15, 5, 2017, 2000, 22, 2, 2018, 3);
   //O oraculo, é o que sabe os valores corretos
   assert.equal(obtido, 3); // No lugar do correto seria o valor correto
});





