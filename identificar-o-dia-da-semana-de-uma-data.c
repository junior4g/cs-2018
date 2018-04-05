#include<stdio.h>

typedef int bool;
#define TRUE 1
#define FALSE 0

int main(){

int dataDesejada = 20160925;
int anoBissexto = 2016;
int dataReferencia = 20160930;
int diaSemanaReferencia = 2;
int saida, diaSemana, somaDias, invertido, aux;
int anoDesejado = (dataDesejada / 10000);
int mesDesejado = ((dataDesejada / 100) % 10);
int diaDesejado = dataDesejada % 100;
int anoReferencia = dataReferencia / 10000;
int mesReferencia = (dataReferencia / 100) %10;
int diaReferencia = dataReferencia % 100;
int dr = 1, dd = 12;
int dias = 0;
int ocorre, exclui;

printf("\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d", dataDesejada);

int UltimoDiaDoMes(int m, int a, int b);
int AnoBissexto(int a, int r);

//Verificar qual data é a menor e colocar como a dataReferencia
if(anoDesejado < anoReferencia){
    aux = dataDesejada;
    dataDesejada = dataReferencia;
    dataReferencia = aux;
}
if(anoDesejado = anoReferencia){
    if(mesDesejado < mesReferencia){
        aux = dataDesejada;
        dataDesejada = dataReferencia;
        dataReferencia = aux;
    }
}
if(anoDesejado = anoReferencia){
    if(mesDesejado = mesReferencia){
        if(diaDesejado < diaReferencia){
            aux = dataDesejada;
            dataDesejada = dataReferencia;
            dataReferencia = aux;
        }
    }
}
anoDesejado = (dataDesejada / 10000);
mesDesejado = ((dataDesejada / 100) % 10);
diaDesejado = dataDesejada % 100;
anoReferencia = dataReferencia / 10000;
mesReferencia = (dataReferencia / 100) %10;
diaReferencia = dataReferencia % 100;

printf("\n\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d", dataDesejada);
printf("\n%d\n\n", (anoReferencia*10000) + (mesReferencia*100) + (diaReferencia));

while(dataReferencia <= dataDesejada){
    anoReferencia = dataReferencia / 10000;
    mesReferencia = (dataReferencia / 100) %10;
    diaReferencia = dataReferencia % 100;

    printf("\n%d",diaReferencia);

    diaReferencia++;
    dias++;

    if( UltimoDiaDoMes(diaReferencia, mesReferencia, anoBissexto) = diaReferencia){
        if(mesReferencia = 12){
            mesReferencia = 01;
            anoReferencia++;
        }
        else if(mesReferencia != 12)
            mesReferencia = mesReferencia + 1;
        else
            diaReferencia = 01;
    }
    else if( UltimoDiaDoMes(diaReferencia, mesReferencia, anoReferencia) = diaReferencia )
        diaReferencia = diaReferencia + 1;
    else
        dias = dias + 1;

    dataReferencia = (anoReferencia*10000) + (mesReferencia*100) + (diaReferencia);
}

int UltimoDiaDoMes(int m, int a, int b){
    if( m == 2){
        if( AnoBissexto(a, b))
            return 29;
        else
            return 28;
    }
}

int AnoBissexto(int a, int r){
    ocorre = ( (a - r) % 4 ) = 0;
    exclui = ( ((a % 100) = 0) && ((a % 400) = 0) ) != 0;

    return a =
}

printf("\n\n%d\n\n",dias);
printf("\n\ndata referencia final = %d\n\n", dataReferencia);

return 0;
}
