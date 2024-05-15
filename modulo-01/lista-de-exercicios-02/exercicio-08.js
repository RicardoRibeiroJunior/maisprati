const prompt = require('prompt-sync')();

let tempoDeAtividade = parseInt(prompt("Informe a quantidade de horas de atividade no mês: "));

if(tempoDeAtividade <= 10){
    console.log(`Sua pontuação foi ${tempoDeAtividade * 2}`);
    console.log(`Seus rendimentos foram de R$ ${tempoDeAtividade * 2 * 0.05}`);
}else if(tempoDeAtividade > 10 && tempoDeAtividade <= 20){
    console.log(`Sua pontuação foi ${tempoDeAtividade * 5}`);
    console.log(`Seus rendimentos foram de R$ ${tempoDeAtividade * 5 * 0.05}`);
}else{
    console.log(`Sua pontuação foi ${tempoDeAtividade * 10}`);
    console.log(`Seus rendimentos foram de R$ ${tempoDeAtividade * 10 * 0.05}`);
}

