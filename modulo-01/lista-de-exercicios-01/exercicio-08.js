//EXERCICIO 08 - ORDENANDO VALORES
const prompt = require('prompt-sync')();

var valor1 = parseInt(prompt("DIGITE O PRIMEIRO VALOR: "));
var valor2 = parseInt(prompt("DIGITE O SEGUNDO VALOR: "));

if(valor1 === valor2){
    console.log("OS VALORES SÃO IGUAIS.");
}

if(valor1 < valor2){
    console.log(valor1 + " " + valor2);
}else{
    console.log(valor2 + " " + valor1);
}