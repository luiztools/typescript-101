//app.ts
() => {
    function somar(num1: number, num2: number){
        return num1 + num2;
    }
    
    const var1 = "2";
    const var2 = "3";
    somar(+var1, +var2);
    
    function dividir(num1: number, num2: number): number{
        return num1 / num2;
    }
    
    const resultado = dividir(4,2);
    
    function multiplicar(num1, num2){
        return num1 * num2;
    }
    
    const resultado2 = multiplicar(2,3) as number;
    
    console.log(somar(1,2));
}

