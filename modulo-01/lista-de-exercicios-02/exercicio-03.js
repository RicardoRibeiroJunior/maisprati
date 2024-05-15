const prompt = require('prompt-sync')();

let distancia = parseInt(prompt("Qual a distância que você deseja percorrer (km)?"));

if(distancia <= 200){
    console.log(`O valor da sua passagem é de R$ ${distancia * 0.50}`);
}else{
    console.log(`O valor da sua passagem é de R$ ${distancia * 0.45}`);
}