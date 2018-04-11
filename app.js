const funcao = require("./dia-da-semana-alternativo");
const processa = require("./argumentos");

//Verifica se os argumentos são NULL
let args = processa.argumentos(process.argv); //pode ser const

if (args == null) {// Args Vetor para os argumentos. Se for NULL retorna -1
    process.exitCode = -1;
    return;
}

const [ dia, mes, ano, bissexto, d, m, a, ds ] = args; //fornecer as variaveis nessa ordem

process.exitCode = funcao.diaDaSemana(dia, mes, ano, bissexto, d, m, a, ds); //Não vai exibir, só deposita os valores

