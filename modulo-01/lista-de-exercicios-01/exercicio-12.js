//EXERCICIO 12 - NUMERO DE 1000 A 1999 QUE DIVIDIDOS POR 11 DÃO RESTO IGUAL A 5.
const prompt = require('prompt-sync')();

for (let i = 1000; i <= 1999; i++){
    if(i % 11 === 5){
        console.log(i);
    }
}
