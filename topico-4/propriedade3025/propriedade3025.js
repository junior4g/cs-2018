function propriedade3025(n) {
    if( n>0 && n<= 9999){
        i = n / 100;
        j = n % 100;
    }
    return (parseInt(i) + j) * (parseInt(i) + j) == n;
}

console.log(propriedade3025(3025));
