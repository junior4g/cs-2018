const funcao = require("./dia-da-semana-alternativo");

/**
 * Avalia argumentos fornecidos ao programa.
 * @param args Vetor contendo argumentos fornecidos ao programa. Sendo os
 * dois primeiros ignorados.
 *
 * @returns {*} O valor null em caso de argumentos inválidos, ou inconsistência
 * em pelo menos um deles ou o vetor com os seguintes valores, nesta ordem:
 * dia, mês e ano da data cujo dia da semana é desejado, o ano bissexto,
 * o dia, mês e o ano da data de referência e o dia da semana da data de
 * referência.
 */
function argumentos(args) { //Função Args
    const totalInvalidoDeArgumentos = (x) => x.length != 6; //Definindo uma função, recebe um parametro x, e verifica se é diferente de 6. Se sim então é verdadeiro. É 4 mais por padrão tem 2 a mais. 
    const formatoDataInvalido = (x) => x.length != 8 || isNaN(parseInt(x));
    const diaDaSemanaInvalido = (s) => s < 0 || s > 6;
    const diaInvalido = (x) => x < 1 || x > 31;
    const mesInvalido = (x) => x < 1 || x > 12;
    const bissextoInvalido = (x) => x < 1;

    function elementosDeData(d) {
        const dia = d % 100;
        const mes = Math.floor((d % 10000) / 100);
        const ano = Math.floor(d / 10000);

        return [dia, mes, ano];
    }

    if (totalInvalidoDeArgumentos(args)) { //Verifica se recebe o total de argumentos 
        return null;
    }

    if (formatoDataInvalido(args[2]) || formatoDataInvalido(args[4])) {
        return null;
    }

    const bissexto = parseInt(args[3]);
    const diaDaSemana = parseInt(args[5]);

    if (bissextoInvalido(bissexto) || diaDaSemanaInvalido(diaDaSemana)) {
        return null;
    }

    const [dia, mes, ano] = elementosDeData(parseInt(args[2]));
    const [d, m, a] = elementosDeData(parseInt(args[4]));

    if (diaInvalido(dia) || diaInvalido(d)
        || mesInvalido(mes) || mesInvalido(m)) {
        return null;
    }

    if (funcao.ultimoDiaDoMes(mes, ano, bissexto) < dia
        || funcao.ultimoDiaDoMes(m, a, bissexto) < d) {
        return null;
    }

    return [dia, mes, ano, bissexto, d, m, a, diaDaSemana];
}

exports.argumentos = argumentos; //Exportando com o nome argumentos