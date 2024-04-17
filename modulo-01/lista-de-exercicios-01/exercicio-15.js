//EXERCICIO 15 - MEDIA PONDERADA DE NUMEROS DECIMAIS
const prompt = require('prompt-sync')();

var somaPesos = 0;
var multipicacao = 0;

var numero = parseFloat(prompt("DIGITE UM NUMERO: "));
var peso = parseFloat(prompt("DIGITE SEU PESO: "));

while (numero != 0) {
    
    somaPesos += peso;
    
    multipicacao += numero * peso;

    numero = parseFloat(prompt("DIGITE UM NUMERO: "));


    if(numero != 0){
        peso = parseFloat(prompt("DIGITE SEU PESO: "));
    }

}


console.log("A MÉDIA PONDERADA DOS NÚMEROS INFORMADOS É = " + multipicacao / somaPesos);