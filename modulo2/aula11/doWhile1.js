import PromptSync from "prompt-sync";
const prompt = PromptSync();

let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha !== "lions123");