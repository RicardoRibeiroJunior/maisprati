//EXERCICIO 10 - MOSTRAR UM NUMERO 10 VEZES
const prompt = require('prompt-sync')();

var numero = parseInt(prompt("DIGITE O CODIGO: "));

for(let i = 0; i < 10 ; i++){
    console.log(numero);
}