const prompt = require('prompt-sync')();

let numeroSorteado = Math.floor(Math.random() * 5) + 1;

var numero = parseInt(prompt("Digite um numero de 1 a 5: "));

while(numero != numeroSorteado){
    console.log("Não acertou. Tente mais uma vez!");
    numero = parseInt(prompt("Digite um numero de 1 a 5: "));
}

if(numero == numeroSorteado){
    console.log("Parabéns, você acertou o numero sorteado!");
}


