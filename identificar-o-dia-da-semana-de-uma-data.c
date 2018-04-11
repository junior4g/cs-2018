#include<stdio.h>

int main(){

int dataReferencia = -1;
int dataDesejada = -1;
int anoBissexto = -1;
int diaSemanaReferencia = -1;
 
int diaSemanaDesejado = 0;

//teste
/*printf("\nInforme a data de referencia:");
scanf("%d",&dataReferencia);
printf("\nInforme a data desejada:");
scanf("%d",&dataDesejada);
printf("\nInforme um ano bissexto:");
scanf("%d",&anoBissexto);
printf("\nInforme o dia da semana de referencia:");
scanf("%d",&diaSemanaReferencia);*/

//teste
dataReferencia = 20180401;
dataDesejada = 20180411;
anoBissexto = 2;
diaSemanaReferencia = 6;

int cont = 1;
int saida, diaSemana, somaDias, invertido, aux;
int anoDesejado = (dataDesejada / 10000);
int mesDesejado = ((dataDesejada / 100) % 100);
int diaDesejado = dataDesejada % 100;
int anoReferencia = dataReferencia / 10000;
int mesReferencia = (dataReferencia / 100) % 100;
int diaReferencia = dataReferencia % 100;
int condicao = 1;
//teste
//printf("\ndata referencia = %d", dataReferencia);//teste
//printf("\ndata desejada = %d", dataDesejada);//teste
printf("\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d", dataDesejada);
printf("\nAno de referencia = %d", anoReferencia);
printf("\nMes de referencia = %d", mesReferencia);
printf("\nDia de referencia = %d", diaReferencia);
printf("\n\n#################Programa#################");

dataReferencia = (anoReferencia*10000) + (mesReferencia*100) + (diaReferencia);
//printf("\n\ndata referencia = %d", dataReferencia);//teste

//R7 Se não receber os 4 argumentos
if(dataReferencia == -1 || dataDesejada == -1 || anoBissexto == -1 || diaSemanaReferencia == -1){
	condicao = -1;
}

//R8 verifica se o numero é inteiro
//int aux;
aux = dataReferencia;
if (aux != dataReferencia){ //Se for diferente é porque não é inteiro
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
if (aux != diaSemanaReferencia){
    condicao = -1;
}
if(dataReferencia < 0 || dataDesejada < 0 || anoBissexto < 0 || diaSemanaReferencia < 0){//R9 Verifica se o valor é negativo
	condicao = -1;
}
//R10 Verifica se o dia da semana de referencia é maior que 6
if( diaSemanaReferencia > 6 ){
	condicao = -1;
}
//R11 Verifica se o ano bissexto é menor que 1
if( anoBissexto < 1 ){ 
	condicao = -1;
}
//R12 A Verifica se a data não possui 8 digitos
int contaDigitos = 0;
aux = dataReferencia;
while ( dataReferencia != 0){
    	contaDigitos = contaDigitos + 1;
        dataReferencia = dataReferencia / 10;//enquanto dividir por 10 ele incrementa o contador
}
if( contaDigitos < 8 || contaDigitos > 8 ){
	condicao = -1;
}
dataReferencia = aux;
//R12 B Verifica se o primeiro digito da data é zero 0aaammdd
if( (anoReferencia / 1000) % 10 == 0 ){
	condicao = -1;
}
//R12 C verifica se o mês é zero ou maior que 12
if( mesReferencia == 0 || mesReferencia > 12 ){
	condicao = -1;
}
//R12 D Verifica se o dia é zero ou maior que 31
if( diaReferencia == 0 || diaReferencia > 31 ){
	condicao = -1;
}
//R12 E Verifica se o dia é imcompatível com o mês
if( mesReferencia == 4 || mesReferencia == 6 || mesReferencia == 9 || mesReferencia == 11 ){
	if( diaReferencia > 30 ){
		condicao = -1;	
	}
}
if (anoReferencia % 4 == 0 && (anoReferencia % 400 == 0 || anoReferencia % 100 != 0)) {//Verifica se é bissexto
	if( mesReferencia == 2 ){
		if( diaReferencia > 29 ){
			condicao = -1;
		}
	}
}
else if( mesReferencia == 2 ){
	if( diaReferencia > 28 ){
		condicao = -1;
	}
}

if( condicao == 1 ){
	while( dataReferencia < dataDesejada ){
		anoDesejado = (dataDesejada / 10000);
		mesDesejado = ((dataDesejada / 100) % 100);
		diaDesejado = dataDesejada % 100;
		anoReferencia = dataReferencia / 10000;
		mesReferencia = (dataReferencia / 100) %100;
		diaReferencia = dataReferencia % 100;
		
		if( mesReferencia == 2 ){//Tratamento para o mÃªs de fevereiro
			if( diaReferencia == 29){
				diaReferencia = 01;
				mesReferencia = 03;
			}
			else if( diaReferencia == 28 ){//VerificaÃ§Ã£o dos anos bissextos
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
		//meses que sÃ£o de 30 dias
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
	int i;
	for( i=diaSemanaReferencia ; i<cont % 7 ; i++){
		diaSemanaDesejado = diaSemanaDesejado + 1;
	}
	
}
else{//algum erro nos dados recebidos retornando -1
	printf("\nRetorna -1");//teste
}


printf("\ndiasemanadesejado = %d", diaSemanaDesejado);


//teste
printf("\n\n##########################################");
printf("\n\nDados para teste");
if (anoReferencia % 4 == 0 && (anoReferencia % 400 == 0 || anoReferencia % 100 != 0)) {
	printf("\nE bissexto");
}
printf("\nContador de dias %d",cont);
printf("\ncondicao = %d", condicao);
printf("\n%d", cont % 7 );


return 0;
}
