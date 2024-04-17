//EXERCICIO 07 - VENDA DE MAÇÃS
const prompt = require('prompt-sync')();

var quantidadeDeMaças = parseInt(prompt("DIGITE A QUANTIDADE DE MAÇÃS: "));

if(quantidadeDeMaças >= 12){
    console.log(`O VALOR TOTAL DA COMPRA FOI: R$ ${quantidadeDeMaças * 0.25}`);
}else{
    console.log(`O VALOR TOTAL DA COMPRA FOI: R$ ${quantidadeDeMaças * 0.30}`);
}