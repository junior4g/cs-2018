#include<stdio.h>

int main(){

int dataReferencia = -1;
int dataDesejada = -1;
int anoBissexto = -1;
int diaSemanaReferencia = -1; 
int cont = 1;
int saida, diaSemana, somaDias, invertido, aux;
int anoDesejado = (dataDesejada / 10000);
int mesDesejado = ((dataDesejada / 100) % 100);
int diaDesejado = dataDesejada % 100;
int anoReferencia = dataReferencia / 10000;
int mesReferencia = (dataReferencia / 100) % 100;
int diaReferencia = dataReferencia % 100;
int condicao = 1;
printf("\ndata referencia = %d", dataReferencia);//teste
printf("\ndata desejada = %d", dataDesejada);//teste

//teste
printf("\n\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d\n\n", dataDesejada);
printf("\nAno de referencia = %d", anoReferencia);
printf("\nMes de referencia = %d", mesReferencia);
printf("\nDia de referencia = %d", diaReferencia);

dataReferencia = (anoReferencia*10000) + (mesReferencia*100) + (diaReferencia);
printf("\n\ndata referencia = %d", dataReferencia);//teste

//R7 Se n�o receber os 4 argumentos
if(dataReferencia == -1 || dataDesejada == -1 || anoBissexto == -1 || diaSemanaReferecnia == -1){
	condicao = -1;
}

//R8 verifica se o numero � inteiro
int aux;
aux = dataReferencia;
if (aux != dataReferencia){ //Se for diferente � porque n�o � inteiro
    condicao = -1;
}
aux = dataDesejada;
if (aux != dataDesejada){
    condicao = -1;
}
aux = anoBissexto;
if (aux != anoBissexto){
    condicao = -1;
}
aux = diaSemanaReferencia;
if (aux != valor){
    condicao = -1;
}
if(dataReferencia < 0 || dataDesejada < 0 || anoBissexto < 0 || diaSemanaReferecnia < 0){//R9 Verifica se o valor � negativo
	condicao = -1;
}
//R10 Verifica se o dia da semana de referencia � maior que 6
if( diaSemanaReferencia > 6 ){
	condicao = -1;
}
//R11 Verifica se o ano bissexto �menor que 1
if( anoBissexto < 1 ){ 
	condicao = -1;
}
//R12 A Verifica se a data n�o possui 8 digitos
if(){
	condicao = -1;
}
//R12 B Verifica se o primeiro digito da data � zero
if(){
	condicao = -1;
}
//R12 C verifica se o m�s � zero ou maior que 12
if( mesReferencia == 0 || mesReferencia > 12 ){
	condicao = -1;
}
//R12 D Verifica se o dia � zero ou maior que 31
if( diaReferencia == 0 || diaReferencia > 31 ){
	condicao = -1;
}
//R12 E Verifica se o dia � imcompat�vel com o m�s
if( mesReferencia == 4 || mesReferencia == 6 || mesReferencia == 9 || mesReferencia == 11 ){
	if( diaReferencia > 30 ){
		condicao = -1;	
	}
}
if (anoReferencia % 4 == 0 && (anoReferencia % 400 == 0 || anoReferencia % 100 != 0)) {//Verifica se � bissexto
	if( mesReferencia == 2 ){
		if( diaReferencia > 29 ){
			condicao = -1;
		}
	}
}
else if( mesReferencia == 2 ){
	if( diaReferencia > 29 ){
		condicao = -1;
	}
}


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
	printf("\ndata referencia = %d", dataReferencia);//teste
	cont++;
}
printf("\n\n%d",cont);//teste

//teste
if (anoReferencia % 4 == 0 && (anoReferencia % 400 == 0 || anoReferencia % 100 != 0)) {
	printf("\n\nE bissexto");
}

return 0;
}
