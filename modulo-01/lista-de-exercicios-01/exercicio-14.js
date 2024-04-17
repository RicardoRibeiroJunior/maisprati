//EXERCICIO 14 - MEDIA ARITIMÉTICA DE NUMEROS DECIMAIS
const prompt = require('prompt-sync')();

var soma = 0;
var quantidadeDeNumeros = 0;

var numero = parseFloat(prompt("DIGITE UM NUMERO: "));

while (numero != 0) {
    
    soma += numero;
    quantidadeDeNumeros += 1;

    numero = parseFloat(prompt("DIGITE UM NUMERO: "));

}

console.log("A MÉDIA DOS NÚMEROS INFORMADOS É = " + soma/quantidadeDeNumeros);