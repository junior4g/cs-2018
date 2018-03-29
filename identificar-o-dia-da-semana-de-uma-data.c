#include<stdio.h>

int main(){

int dataDesejada = 20160925;
int anoBissexto = 2016;
int dataReferencia = 20160928;
int diaSemanaReferencia = 2;
int saida, diaSemana, somaDias, invertido, aux;
int anoDesejado = (dataDesejada / 10000);
int mesDesejado = ((dataDesejada / 100) % 10);
int diaDesejado = dataDesejada % 100;
int anoReferencia = dataReferencia / 10000;
int mesReferencia = (dataReferencia / 100) %10;
int diaReferencia = dataReferencia % 100;
printf("\ndata referencia = %d", dataReferencia);
printf("\ndata desejada = %d", dataDesejada);

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

if(){
    if(mesReferencia >= 1){
        31
    }
    if(mesReferencia >= 2){ 
        28 ou 29
    }
    if(mesReferencia >= 3){ 
        31
    }
    if(mesReferencia >= 4){ 
        30
    }
    if(mesReferencia >= 5){ 
        31
    }
    if(mesReferencia >= 6){ 
        30
    }
    if(mesReferencia >= 7){ 
        31
    }
    if(mesReferencia >= 8){ 
        31
    }
    if(mesReferencia >= 9){
        30
    }
    if(mesReferencia >= 10){ 
        31
    }
    if(mesReferencia >= 11){ 
        30
    }
    if(mesReferencia >= 12){ 
        31
    }
}

/*
switch ( diaSemana ){
     case 0 :
       printf ("Segunda feira\n");
     break;

     case 1 :
       printf ("Terca feira\n");
     break;

     case 2 :
        printf ("Quarta feira\n");
     break;

     case 3 :
        printf ("Quinta feira\n");
     break;

     case 4 :
        printf ("Sexta feira\n");
     break;

     case 5 :
        printf ("Sabado\n");
     break;

     case 6 :
        printf ("Domingo\n");
     break;

     default :
       printf ("Valor invalido!\n");
} */

return 0;
}
