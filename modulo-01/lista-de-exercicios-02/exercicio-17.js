const prompt = require('prompt-sync')();

var nome = [];
var idade = [];

for(let i=0; i<9; i++){
    nome[i] = parse(prompt(`DIGITE SEU NOME:`));
    idade[i] = parseInt(prompt(`DIGITE SUA IDADE:`));
}

console.log("Pessoas menores de idade:")

for(let i=0; i<9; i++){
    if(idade < 18){
        console.log(nome[i]);
        console.log(idade[i]);
    }
}