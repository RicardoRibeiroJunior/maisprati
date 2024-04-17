//EXERCICIO 02 - PERCENTUAL DE VOTOS BRANCOS, NULOS E VÁLIDOS
const prompt = require('prompt-sync')();

let totalDeEleitores = parseInt(prompt("DIGITE O NÚMERO TOTAL DE ELEITORES:"));

let totalDeVotosBrancos= parseInt(prompt("DIGITE O NÚMERO TOTAL DE VOTOS BRANCOS:"));

let totalDeVotosNulos = parseInt(prompt("DIGITE O NÚMERO TOTAL DE VOTOS NULOS:"));

let totalDeVotosValidos = parseInt(prompt("DIGITE O NÚMERO TOTAL DE VOTOS VÁLIDOS:"));

console.log(`${(totalDeVotosBrancos/totalDeEleitores)*100} % DE VOTOS BRANCOS.`);
console.log(`${(totalDeVotosNulos/totalDeEleitores)*100} % DE VOTOS NULOS.`);
console.log(`${(totalDeVotosValidos/totalDeEleitores)*100} % DE VOTOS VALIDOS.`);