const prompt = require('prompt-sync')();

let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA - Progressão Aritmética: "));
let razao = parseInt(prompt("Digite a razão: "));

for(let i = 1; i <= 10; i++){
    console.log(`${i}º Termo: ${primeiroTermo}`);
    primeiroTermo +=razao;
}
