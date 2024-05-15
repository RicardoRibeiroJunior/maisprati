const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt("Qual é a velocidade do carro?"));

if(velocidade > 80){
    console.log("Você foi multado por excesso de velocidade! Velocidade máxima permetida é de 80 km/h");
    console.log(`Sua multa é de R$ ${(velocidade - 80) * 5}.`);
}else{
    console.log("Dentro da velocidade permetida.")
}