
function propriedade3025(n) {
    if (n < 0 || n > 9999) {
      return false;
    }
  
    i = n / 100;
    j = n % 100;

    return (parseInt(i) + j) * (parseInt(i) + j) == n;
}

exports.propriedade3025 = propriedade3025;
