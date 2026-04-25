interface Cliente {
    nome: string;
    email: string;
    dataNascimento?: Date;
    salvar: () => void;
}

const cliente : Cliente = {
    nome: "Luiz Duarte",
    email: "contato@luiztools.com.br",
    salvar: () => {
        console.log("Cliente salvo com sucesso!");
    }
}

console.log(cliente.nome);
console.log(cliente.email);
console.log(cliente.dataNascimento);
cliente.salvar();

type Address = `0x${string}`;

const endereco: Address = "0x1234567890abcdef1234567890abcdef12345678";
console.log(endereco);

type Role = "admin" | "user" | "guest";
type ValidNumbers = 1 | 2 | 3 | 4 | 5;

function acessarSistema(role: Role) {
    if (role === "admin") {
        console.log("Acesso total ao sistema.");
    } else if (role === "user") {
        console.log("Acesso limitado ao sistema.");
    } else if (role === "guest") {
        console.log("Acesso apenas para visualização.");
    }
}

acessarSistema("admin");
acessarSistema("user");
acessarSistema("guest");

interface EstruturaDados<T> {
    valores: T[];
}

const numeros: EstruturaDados<number> = {
    valores: [1, 2, 3, 4, 5]
};

const strings: EstruturaDados<string> = {
    valores: ["a", "b", "c", "d", "e"]
};

console.log(numeros.valores);
console.log(strings.valores);

function salvarPessoa(pessoa : Pick<Cliente, "nome" | "email">) {
    console.log(`Salvando pessoa: ${pessoa.nome} - ${pessoa.email}`);
}

salvarPessoa({ nome: "Maria Silva", email: "maria.silva@example.com" });

function funcNome(nome: Cliente["nome"]) {
    console.log(`O nome do cliente é: ${nome}`);
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getValue<Cliente, "email">(cliente, "email");