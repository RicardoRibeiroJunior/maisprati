const prompt = require('prompt-sync')();

let jogada1 = prompt("Digite a primeira jogada:");
let jogada2 = prompt("Digite a segunda jogada:");

if(jogada1 == "pedra" && jogada2 == "tesoura"){
    console.log("Jogada 1 ganhou! Pedra amassa ou quebra a tesoura.")
}

if(jogada1 == "tesoura" && jogada2 == "papel"){
    console.log("Jogada 1 ganhou! Tesoura corta o papel.")
}

if(jogada1 == "papel" && jogada2 == "pedra"){
    console.log("Jogada 1 ganhou! Papel embrulha a pedra.")
}

//

if(jogada2 == "pedra" && jogada1 == "tesoura"){
    console.log("Jogada 2 ganhou! Pedra amassa ou quebra a tesoura.")
}

if(jogada2 == "tesoura" && jogada1 == "papel"){
    console.log("Jogada 2 ganhou! Tesoura corta o papel.")
}

if(jogada2 == "papel" && jogada1 == "pedra"){
    console.log("Jogada 2 ganhou! Papel embrulha a pedra.")
}