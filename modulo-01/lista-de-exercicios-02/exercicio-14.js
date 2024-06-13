const prompt = require('prompt-sync')();

let arr = [];

for(let i = 0; i <7; i++){
    let nome = prompt("Digite um nome: ");
    arr.push(nome);
}

for(let i = 6; i >= 0; i--){
    console.log(arr[i]);
}