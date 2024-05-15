const prompt = require('prompt-sync')();

var a = parseFloat(prompt("DIGITE O LADO A DO TRIÂNGULO: "));
var b = parseFloat(prompt("DIGITE O LADO B DO TRIÂNGULO: "));
var c = parseFloat(prompt("DIGITE O LADO C DO TRIÂNGULO: "));

var eUmTriangulo = false;


if((a < b + c) && (b < a + c) && (c < a + b)){
    eUmTriangulo = true;
}else{
    console.log("AS DIMENSÕES INFORMADAS NÃO FORMAM UM TRIÂNGULO.");
}

