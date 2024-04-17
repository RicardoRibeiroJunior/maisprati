//EXERCICIO 04 - média
const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("DIGITE A 1º NOTA: "));
let nota2 = parseFloat(prompt("DIGITE A 2º NOTA: "));

if((nota1 + nota2)/2 == 6.0){
    console.log("PARABÉNS! Você foi aprovado.")
}