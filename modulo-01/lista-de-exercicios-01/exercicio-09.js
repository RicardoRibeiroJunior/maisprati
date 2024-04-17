//EXERCICIO 09 - CÓDIGO DE ORIGEM DO PRODURO
const prompt = require('prompt-sync')();

var codigo = parseInt(prompt("DIGITE O CODIGO: "));

switch (codigo) {
    case 1:
      console.log("Produto da região SUL.");
      break;
    case 2:
      console.log("Produto da região NORTE.");
      break;
    case 3:
      console.log("Produto da região LESTE.");
      break;
    case 4:
      console.log("Produto da região OESTE.");
      break;
    case 5:
      console.log("Produto da região NORDESTE.");
      break;
    case 6:
        console.log("Produto da região NORDESTE.");
        break;
    case 7:
        console.log("Produto da região SUDESTE.");
        break;
    case 8:
        console.log("Produto da região SUDESTE.");
        break;
    case 9:
        console.log("Produto da região SUDESTE.");
        break;
  }

  if(codigo >= 10 && codigo <= 20){
    console.log("Produto da região CENTRO-OESTE.");
  }

  if(codigo > 20 && codigo <= 50){
    console.log("Produto da região NORDESTE.");
  }else if(codigo > 50){
    console.log("Produto Importado.");
  }