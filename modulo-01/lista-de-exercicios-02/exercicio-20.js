var funcionarios = [];
const funcionario = new Object();

for(let i = 0; i < 80; i++){
    funcionario.matricula = i+1;
    funcionario.nome = `Funcionaio${i+1}`;
    funcionario.salario_bruto = 1000 + i;
    funcionario.deducao_inss = funcionario.salario_bruto * 0.12;
    funcionario.salario_liquido = funcionario.salario_bruto - funcionario.deducao_inss;
    funcionarios.push(funcionario);
}

    funcionarios.forEach(funcionario => console.log(funcionario));
