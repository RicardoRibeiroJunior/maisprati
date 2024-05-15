const prompt = require('prompt-sync')();

let tipoDeCarro = parseInt(prompt("Informe o tipo de carro: 1 - Popular | 2 - Luxo: "));
let qtdDiasDeAluguel = parseInt(prompt("Informe a quantidade de dias de aluguel: "));
let kmPercorridos = parseInt(prompt("Informe a quantidade de km percorridos: "));

if(tipoDeCarro == 1){
    let valor = 90 * qtdDiasDeAluguel + (kmPercorridos <= 100 ? kmPercorridos * 0.20 : kmPercorridos * 0.10);
    console.log(`O valor do aluguel foi de R$ ${valor}`);
}

if(tipoDeCarro == 2){
    let valor = 150 * qtdDiasDeAluguel + (kmPercorridos <= 200 ? kmPercorridos * 0.30 : kmPercorridos * 0.25);
    console.log(`O valor do aluguel foi de R$ ${valor}`);
}