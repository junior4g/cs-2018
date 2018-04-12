const funcao = require("./dia-da-semana-alternativo");
const processa = require("./argumentos");

let args = processa.argumentos(process.argv);

if (args == null) {
    process.exitCode = -1;
    return;
}

const [ dia, mes, ano, bissexto, d, m, a, ds ] = args;

process.exitCode = funcao.diaDaSemana(dia, mes, ano, bissexto, d, m, a, ds);

