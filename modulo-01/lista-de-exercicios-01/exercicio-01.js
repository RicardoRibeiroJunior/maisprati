//EXERCICIO 01 - CONVERSÃO DE TEMPERATURAS CELSIUS PARA FAHRENHEIT.
const prompt = require('prompt-sync')();

let temperaturaCelsius = parseFloat(prompt("DIGITE A TEMPERATURA EM GRAUS CELSIUS:"));

let temperaturaFahrenheit = (temperaturaCelsius * 9)/5 + 32;

console.log("A TEMPERATURA CORRESPONDENTE EM FAHRENHEIT É: " + temperaturaFahrenheit);