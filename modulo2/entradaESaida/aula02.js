// 1. Importa e prepara a função prompt
import promptSync from "prompt-sync";
const prompt = promptSync();

// 2. Pergunta e já salva a resposta na variável na mesma linha
let nome = prompt("Qual é o seu nome? ");

// 3. Exibe a saída
console.log(`Olá, ${nome}!`);
