const prompt = require('prompt-sync')();

var numeros = [];

for(let i=0; i < 10; i++){
    numeros[i] = parseInt(prompt(`DIGITE A ${i + 1}º NUMERO:`));
}

for(let i=0; i < 10; i++){
    if(numeros[i] % 2 == 0){
        console.log(`O número ${numeros[i]} na posição ${i + 1} é par.`);
    }
}

