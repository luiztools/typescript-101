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

function cadastrar(pessoa: { nome: string, dataNascimento: Date}){
    console.log(pessoa.nome);
    console.log(pessoa.dataNascimento);
}

type Pessoa = { nome: string, dataNascimento: Date  };
function cadastrar2(pessoa: Pessoa){
    console.log(pessoa.nome);
    console.log(pessoa.dataNascimento);
}

type Cliente = Pessoa & { email: string };
function cadastrar3(cliente: Cliente){
    console.log(cliente.nome);
    console.log(cliente.dataNascimento);
    console.log(cliente.email);
}

//const numeros : number[] = [];
const numeros : Array<number> = [];
numeros.push(4);