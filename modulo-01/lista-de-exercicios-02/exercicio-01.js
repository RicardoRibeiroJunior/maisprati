/*Redução de tempo de vida de uma fumante. */

const prompt = require('prompt-sync')();

let qtdCigarrosFumadosPorDia = parseInt(prompt("VOCÊ FUMA QUANTOS CIGARROS POR DIA?"));
let tempoQueFumou = parseInt(prompt("POR QUANTOS ANOS VOCÊ JÁ FUMOU?"));

let totalDeCigarrosFumados = qtdCigarrosFumadosPorDia * tempoQueFumou * 365;

let quantidadeDeDiasPerdidos = (totalDeCigarrosFumados * 10)/1440;

console.log(`VOCÊ PERDEU ${quantidadeDeDiasPerdidos.toFixed(2)} DIAS DE SUA VIDA POR FUMAR.`);