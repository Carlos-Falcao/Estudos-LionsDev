import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = Number(prompt("Digite um número: "));

if (numero % 2 == 0){
    console.log("O número é par.");
} else{
    console.log("O número é impar.");
};
