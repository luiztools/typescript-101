"use strict";
function somar(num1, num2) {
    if (typeof num1 === 'number')
        return num1 + num2;
    else
        return "" + num1 + num2;
}
function somar2(num1, num2) {
    if (typeof num1 === 'number')
        return num1 + num2;
    else
        return "" + num1 + num2;
}
function cadastrar(cliente) {
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
}
function cadastrar2(cliente) {
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
}
var numeros = [];
numeros.push(4);
