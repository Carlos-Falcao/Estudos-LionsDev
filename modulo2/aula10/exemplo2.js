import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = Number(prompt("Digite um número: "));

while (numero > 0){
    console.log(`Número atual: ${numero}`);
    numero -= 1;
}