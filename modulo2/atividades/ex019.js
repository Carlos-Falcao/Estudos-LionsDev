import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = prompt("Digite um número: ");

if (numero >= 0) {
    console.log("O número é positivo.");
} else{
    console.log("O número é negativo.");
};
