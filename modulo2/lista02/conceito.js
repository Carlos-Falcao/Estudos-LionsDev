import PromptSync from "prompt-sync";
const prompt = PromptSync();

let media = prompt("Digite a média do aluno: ");

if (media >= 9){
    console.log("Conceito: A");
} else if (media >= 7){
    console.log("Conceito: B");
} else if (media >= 5){
    console.log("Conceito: C");
} else{
    console.log("Conceito: D");
};
