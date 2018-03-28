
#include<stdio.h>

int main(){

//dados para teste inicial
int dataDesejada = 20160928;
int anoBissexto = 2016;
int dataReferencia = 20160928;
int diaSemanaReferencia = 2;
int saida;
int aux;

//recuar ou avançar?
printf("\nAno %d", dataDesejada / 10000);
printf("\nMes %d", (dataDesejada / 100) % 10);
printf("\nDia %d", dataDesejada % 100);

if( (dataReferencia/10000) > ( dataDesejada/10000) ){ //verifica o ano
    printf("\nVai recuar");
}
else if( (dataReferencia/10000) < ( dataDesejada/10000) ){//verifica o ano
    printf("\nVai avançar");
}
else{//verifica o ano
    printf("\nE igual");
    if( ((dataReferencia / 100) % 10) >= (dataDesejada / 100) % 10) ){ //verifica o mês

    }
}

return 0;
}
