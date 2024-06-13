const prompt = require('prompt-sync')();

const funcionario = new Object();

funcionario.nome = prompt(`DIGITE SEU NOME:`);
funcionario.cargo = prompt("DIGITE SEU CARGO: ");
funcionario.salario = parseFloat(prompt("DIGITE SEU SALÁRIO: "));

console.log("OS DADOS INFORMADOS SÃO:");
console.log(funcionario.nome);
console.log(funcionario.cargo);
console.log(funcionario.salario);