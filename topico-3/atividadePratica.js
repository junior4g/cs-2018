function AlphabetSoup(str) { 

  // converte a string em uma matriz de caracteres
  var chars = str.split("");

  // ordena em ordem alfabetica
  var sorted = chars.sort();

  // retorna a string ordenada
  return sorted.join("");    
}
   
AlphabetSoup("orlando"); 
