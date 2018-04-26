
function propriedade153(cdu) {
    if( cdu >= 0 && cdu <= 9999 ){
        c = cdu / 100;
        du = cdu % 100;
        d = du / 10;
        u = du % 10;
    }
    return ( Math.pow(parseInt(c), 3) + Math.pow(parseInt(d), 3) + Math.pow(parseInt(u), 3) == cdu );
}

exports.propriedade153 = propriedade153;
