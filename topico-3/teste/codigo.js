
// Função que retorna a soma dos argumentos fornecidos.
// Espera-se que esta função seja usada não apenas neste
// arquivo, mas também por meio de chamadas contidas em
// outros arquivos. Em consequência, exportamos
// a função (exports) ao criar um módulo.

function AlphabetSoup(str) { 

  // converte a string em uma matriz de caracteres
  var chars = str.split("");

  // ordena em ordem alfabetica
  var sorted = chars.sort();
  
  console.log(sorted.join);

  // retorna a string ordenada
  return sorted.join("");    
}

// module.exports é a referência para o objeto retornado
// por chamadas require(). Em vez da opção abaixo é usada
// outra forma, considerada mais segura e recomendada.
// module.exports.soma = soma;

exports.AlphabetSoup = AlphabetSoup;
