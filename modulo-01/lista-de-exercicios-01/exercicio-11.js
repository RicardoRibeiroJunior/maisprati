//EXERCICIO 11 - PAR OU ÍMPAR
const prompt = require('prompt-sync')();

var numero = parseInt(prompt("DIGITE UM NÚMERO: "));

while (numero > 0) {

    if(numero % 2 === 0){
        console.log("O NÚMERO " + numero + " É PAR.");
    }else{
        console.log("O NÚMERO " + numero + " É ÍMPAR.");
    }

    numero = parseInt(prompt("DIGITE UM NÚMERO: "));
    
}