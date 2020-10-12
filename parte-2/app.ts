function somar(num1 : number | string, num2: number){
    if(typeof num1 === 'number')
        return num1 + num2;
    else
        return `${num1}${num2}`;
}

type NumberOrString = number | string;
function somar2(num1 : NumberOrString, num2: number){
    if(typeof num1 === 'number')
        return num1 + num2;
    else
        return `${num1}${num2}`;
}

function cadastrar(cliente: { nome: string, dataNascimento: Date}){
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
}

type Cliente = { nome: string, dataNascimento: Date  };
function cadastrar2(cliente: Cliente){
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
}

const numeros : number[] = [];
numeros.push(4);