const prompt = require('prompt-sync')();

var lista = [];

var continuar = 0;
var soma = 0;
var menor = 0;
var qtdNumeros = 0;
var qtdPares = 0;

do {
    
    let numero = parseInt(prompt("Informe um numero: "));
    lista.push(numero);

    continuar = parseInt(prompt("Digite 1 - para continuar | 2 - sair: "))

} while (continuar == 1);

menor = lista[0];

for(let i = 0; i < lista.length; i++){
    soma += lista[i];
    qtdNumeros += 1;

    if(lista[i] < menor){
        menor = lista[i];
    }

    if(lista[i] % 2 == 0){
        qtdPares += 1;
    }
}

var media = soma / qtdNumeros;

console.log(`A soma dos números é: ${soma}`);
console.log(`O menor numero digitado é: ${menor}`);
console.log(`A média dos números é: ${media}`);
console.log(`A quantidade de pares é: ${qtdPares}`);

