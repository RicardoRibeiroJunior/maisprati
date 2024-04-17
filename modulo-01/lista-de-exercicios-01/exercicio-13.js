//EXERCICIO 13 - 
const prompt = require('prompt-sync')();

var valores = [];

for(let cont = 0; cont < 5; cont++){
    let numero = parseInt(prompt(`DIGITE O ${cont+1}º NUMERO: `));
    valores.push(numero);
}

for(let i = 0; i < 5; i++){

    console.log(`Tabuada de ${valores[i]}`);

    for(let j = 1; j <= valores[i]; j++){
        
        console.log(`${j} x ${valores[i]} = ${j * valores[i]}`);
        
    }

    console.log("--------------------------------")
}