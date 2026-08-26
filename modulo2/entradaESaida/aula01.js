import * as readline from "readline";

// 1. Configura a interface ligando a entrada e a saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 2. Faz as perguntas em "cascata" (callback)
rl.question("Qual é o seu nome? ", (nome) => {
    rl.question("Quantos anos você tem? ", (idadeTexto) => {

        // 3. Converte o texto para número antes de fazer contas
        let idade = Number(idadeTexto);

        // 4. Exibe o resultado e encerra a interface
        console.log(`Olá, ${nome}! No ano que vem você terá ${idade + 1} anos.`);
        rl.close();
    });
});
