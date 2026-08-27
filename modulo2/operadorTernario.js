import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Qual é a sua idade? "))
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(status);