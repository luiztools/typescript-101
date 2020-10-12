"use strict";
//app.ts
(function () {
    function somar(num1, num2) {
        return num1 + num2;
    }
    var var1 = "2";
    var var2 = "3";
    somar(+var1, +var2);
    function dividir(num1, num2) {
        return num1 / num2;
    }
    var resultado = dividir(4, 2);
    function multiplicar(num1, num2) {
        return num1 * num2;
    }
    var resultado2 = multiplicar(2, 3);
    console.log(somar(1, 2));
});
