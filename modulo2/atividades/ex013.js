import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = Number(prompt("Digite um número: "));

if (numero > 0){
    console.log("O número é positivo.");
} else if (numero == 0){
    console.log("O número é 0.");
} else{
    console.log("O número é negativo.")
};
