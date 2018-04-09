#include<stdio.h>

int main(){

int dataReferencia = 20200101;
int dataDesejada = 20201231;
int anoBissexto = 2016;
int diaSemanaReferencia = 2, cont = 1;
int saida, diaSemana, somaDias, invertido, aux;
int anoDesejado = (dataDesejada / 10000);
int mesDesejado = ((dataDesejada / 100) % 100);
int diaDesejado = dataDesejada % 100;
int anoReferencia = dataReferencia / 10000;
int mesReferencia = (dataReferencia / 100) % 100;
int diaReferencia = dataReferencia % 100;
printf("\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d", dataDesejada);

printf("\n\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d\n\n", dataDesejada);
printf("\nAno de referencia = %d", anoReferencia);
printf("\nMes de referencia = %d", mesReferencia);
printf("\nDia de referencia = %d", diaReferencia);

dataReferencia = (anoReferencia*10000) + (mesReferencia*100) + (diaReferencia);
printf("\n\ndata referencia = %d", dataReferencia);

while( dataReferencia < dataDesejada ){
	anoDesejado = (dataDesejada / 10000);
	mesDesejado = ((dataDesejada / 100) % 100);
	diaDesejado = dataDesejada % 100;
	anoReferencia = dataReferencia / 10000;
	mesReferencia = (dataReferencia / 100) %100;
	diaReferencia = dataReferencia % 100;
	
	if( mesReferencia == 2 ){//Tratamento para o mês de fevereiro
		if( diaReferencia == 29){
			diaReferencia = 01;
			mesReferencia = 03;
		}
		else if( diaReferencia == 28 ){//Verificação dos anos bissextos
			if (anoReferencia % 4 == 0 && (anoReferencia % 400 == 0 || anoReferencia % 100 != 0)) {
    			diaReferencia = diaReferencia + 1;
			}
			else{
				diaReferencia = 01;
				mesReferencia = 03;
			}
		}
		else{
			diaReferencia = diaReferencia + 1;
		}
	}
	//meses que são de 30 dias
	else if( mesReferencia == 4 || mesReferencia == 6 || mesReferencia == 9 || mesReferencia == 11 ){
		if( diaReferencia == 30 ){
			diaReferencia = 01;
			mesReferencia = mesReferencia + 1;
		}
		else{
			diaReferencia = diaReferencia + 1;
		}	
	}
	else if( mesReferencia == 12 ){//quando for dezembro
		if( diaReferencia == 31 ){
			diaReferencia = 01;
			mesReferencia = 01;
			anoReferencia = anoReferencia + 1;
		}
		else{
			diaReferencia = diaReferencia + 1;
		}
	}
	else if( diaReferencia == 31 ){//quando for o final do mes
			mesReferencia = mesReferencia + 1;
			diaReferencia = 01;
	}
	else{
		diaReferencia = diaReferencia + 1;
	}
	dataReferencia = (anoReferencia*10000) + (mesReferencia*100) + (diaReferencia);
	printf("\ndata referencia = %d", dataReferencia);
	cont++;
}
printf("\n\n%d",cont);

if (anoReferencia % 4 == 0 && (anoReferencia % 400 == 0 || anoReferencia % 100 != 0)) {
	printf("\n\nE bissexto");
}

return 0;
}
