/**
 * Verifica se um ano é bissexto ou não, assumindo que uma ano
 * de referência é bissexto.
 * @param a O ano que não sabemos se é ou não bissexto.
 * @param r O ano que assumimos ser bissexto.
 * @returns {boolean} O valor true se o ano "a" é bissextou ou false,
 * caso contrário.
 */
function anoBissexto(a, r) {
    let ocorreDeQuatroEmQuatroAnos = Math.abs(a - r) % 4 == 0;
    let naoExclui = !(a % 100 == 0 && a % 400 != 0); 
    return (a == r) || (ocorreDeQuatroEmQuatroAnos && naoExclui); 
}

/**
 * Identifica o último dia de um dado mês. Observe que o mês de
 * fevereiro não possui uma quantidade fixa de dias, mas variável,
 * se o mês é bissexto ou não.
 *
 * @param m O mês (um valor de 1 até 12, inclusive).
 * @param a O ano.
 * @param b Um ano considerado bissexto.
 * @returns {number} A quantidade de dias do mês fornecido, no ano
 * em questão, usando um valor a ser utilizado como ano bissexto.
 */
function ultimoDiaDoMes(m, a, b) {
    if (m == 2) { //Deve colocar const fevereiro 2
        return anoBissexto(a, b) ? 29 : 28; // Se for bissexto retorna 29, se não retorna 28
    }

    return [0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m]; //Retorna o ultimo dia do mês de acordo com a posição do mês, começa com 0 1 2 3 ...
}

/**
 * Verifica se duas datas são diferentes.
 * @param dd O dia da primeira data.
 * @param dm O mês da primeira data.
 * @param da O ano da primeira data.
 * @param fd O dia da segunda data.
 * @param fm O mês da segunda data.
 * @param fa O ano da segunda data.
 * @returns {boolean} O valor true se as datas são diferentes
 * ou o valor false, caso contrário.
 */
function diferentes(dd, dm, da, fd, fm, fa) {
    return dd != fd || dm != fm || da != fa;
}

/**
 * Identifica a ordem entre duas datas.
 * @param dd O dia da primeira data.
 * @param dm O mês da primeira data.
 * @param da O ano da primeira data.
 * @param od O dia da outra data.
 * @param om O mês da outra data.
 * @param oa O ano da outra data.
 * @returns {boolean} O valor true se a primeira data
 * ocorre antes da segunda, ou false, caso contrário.
 */
function antes(dd, dm, da, od, om, oa)  // Verifica se uma data é maior que a outra
    if (da < oa) {
        return true;
    }

    if (da > oa) {
        return false;
    }

    if (dm < om) {
        return true;
    }

    if (dm > om) {
        return false;
    }

    return dd < od;
}

/**
 * Identifica a diferença em dias, entre duas datas, uma data inicial
 * e outra final (destino), computada partindo-se da data inicial
 * e avançando dia após dia, até a data final, conforme os
 * requisitos.
 *
 * <p>Esta função está definida apenas para uma data de início
 * que não ocorre após a data final.</p>
 *
 * @param dia O dia da data de início.
 * @param mes O mês da data de início.
 * @param ano O ano da data de início.
 * @param d O dia da data final.
 * @param m O mês da data final.
 * @param a O ano da data final.
 * @param bissexto Um ano considerado bissexto.
 * @returns {number} A diferença em dias entre a data de início e
 * a data final.
 */
function diferencaEmDias(dia, mes, ano, d, m, a, bissexto) {
    let diferenca = 0;

    while (diferentes(dia, mes, ano, d, m, a)) {
        if (ultimoDiaDoMes(mes, ano, bissexto) == dia) {
            if (mes == 12) {
                mes = 1;
                ano = ano + 1;
            } else {
                mes = mes + 1;
            }

            dia = 1;
        } else {
            dia = dia + 1;
        }

        diferenca = diferenca + 1;
    }

    return diferenca;
}

/**
 * Obtém o dia da semana para a data dia/mes/ano assumindo que o dia
 * d/m/a ocorre no dia da semana s e que bissexto é um ano bissexto.
 * @param dia Dia da data dia/mes/ano.
 * @param mes Mês da data dia/mes/ano.
 * @param ano Ano da data dia/mes/ano.
 * @param bissexto Um suposto ano bissexto.
 * @param dr Dia da data de referência.
 * @param mr Mês da data de referência.
 * @param ar Ano da data de referência.
 * @param s O dia da semana da data de referência, onde 0 é segunda,
 * 1 é terça-feira, 2 é quarta-feira e assim por diante.
 * @returns {number} O valor 0 para segunda-feira, 1 para terça-feira e
 * assim por diante.
 */
function diaDaSemana(dia, mes, ano, bissexto, dr, mr, ar, s) {
    // IMPORTANTE: para diferença de 1 dia, o resultado é ontem ou amanhã,
    // o que depende da data ocorrer antes ou após a data de referência.
    let anterior = -1;

    if (antes(dr, mr, ar, dia, mes, ano)) {
        anterior = 1;

        let [td, tm, ta] = [dia, mes, ano];
        [dia, mes, ano] = [dr, mr, ar];
        [dr, mr, ar] = [td, tm, ta];
    }

    const diferenca = diferencaEmDias(dia, mes, ano, dr, mr, ar, bissexto);

    // Avança ou retrocede a quantidade 'diferenca' de dias,
    // lembrando que tudo se repete de 7 em 7 dias.
    const parcial = (s + anterior * diferenca) % 7;

    // Ao retroceder o valor parcial pode ser negativo, adicione 7,
    // que não altera o dia da semana e o coloca na faixa de 0 a 6.
    return parcial < 0 ? parcial + 7 : parcial;
}

exports.diaDaSemana = diaDaSemana;
exports.ultimoDiaDoMes = ultimoDiaDoMes;