/**
 * Representa o calculo para encontrar o dia da semana de uma determinada data.
 * Serão informados o dia, mês e ano.
 * @constructor
 * @param {number} d - Representa o dia.
 * @param {number} m - Representa o mês.
 * @param {number} a - Representa o ano.
 * @returns {number} Um valor de 0 a 6, onde 0 representa segunda feira, 1 terça feira e 
 * assim sucessivamente.
 */
function diaDaSemana(d, m, a) {
	condicao = 0;
	
	if( (d <= 1 && d <= 31) && (m >= 1 && m <= 12) && (a > 1753) ){

		if( (m == 1) || (m == 2) ){
			m = m + 12;
			a = a - 1;
		}
		
		s = (d + (2*m)) + ( (3*(m+1))/5 ) + a + ((a/4)-(a/100)) + (a/400);    
		
		
		return parseInt(s) % 7;
	}
}

exports.diaDaSemana = diaDaSemana;
