//EXERCICIO 03 - OPERAÇÕES COM NÚMEROS INTEIROS
const prompt = require('prompt-sync')();

var inteiros = [];

for(let cont = 0; cont < 4; cont++){
    let numero = parseInt(prompt(`DIGITE O ${cont+1}º NUMERO: `));
    inteiros.push(numero);
}

inteiros[3] = inteiros[0] + inteiros[1] + inteiros[2];
inteiros[0] += 25;
inteiros[1] *= 3;
inteiros[2] = inteiros[2] * 12/100;


for(let cont = 0; cont < 4; cont++){
    console.log(inteiros[cont]);
}
