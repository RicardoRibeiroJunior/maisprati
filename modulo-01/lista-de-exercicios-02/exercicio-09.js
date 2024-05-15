const prompt = require('prompt-sync')();

var lista = [];

var continuar = 0;

var totalSalarioHomens = 0;
var totalSalarioMulheres = 0;

do {
    
    let nome = prompt("Informe o nome do funcionário: ");
    let sexo = prompt("Informe o sexo: M - masculino | F - femenino: ");
    let salario = parseFloat(prompt("Informe o salário: "));

    const funcionário = {
        nome: nome,
        sexo: sexo,
        salario: salario,
    }

    lista.push(funcionário);

    continuar = parseInt(prompt("Digite 1 - para continuar | 2 - sair: "))

} while (continuar == 1);


lista.map((item) =>{
    console.log("-----------------------------------------")
    console.log(item.nome);
    console.log(item.salario);
    console.log(item.sexo);
    console.log("-----------------------------------------")
})

lista.map((funcionário) =>{
    if(funcionário.sexo == "m" || funcionário.sexo == "M"){
        totalSalarioHomens += funcionário.salario;
    }

    if(funcionário.sexo == "f" || funcionário.sexo == "F"){
        totalSalarioMulheres += funcionário.salario;
    }
})

console.log("-----------------------------------------")
console.log(`Total de salários dos homens é de: R$ ${totalSalarioHomens}`);
console.log(`Total de salários das mulheres é de: R$ ${totalSalarioMulheres}`);
