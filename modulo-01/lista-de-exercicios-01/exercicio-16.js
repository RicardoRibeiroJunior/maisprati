//EXERCICIO 16 - 50 PRIMOS MAIORES DO QUE 100

var quantidadePrimos = 0;

var numeroDivisores = 0;

var numero = 100;

while(quantidadePrimos < 50){

    for(let j = 1; j <= numero; j++){
        if(numero % j === 0){
            numeroDivisores += 1;
        }  
    } 
    
    if(numeroDivisores == 2){
        quantidadePrimos += 1;
        console.log(numero);
    }

    numero += 1;
    numeroDivisores = 0

}