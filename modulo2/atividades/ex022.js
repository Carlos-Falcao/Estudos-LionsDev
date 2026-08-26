import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Qual a sua idade? "));

if (idade < 12 || idade >= 60){
    console.log("Meia-entrada.");
} else{
    console.log("Inteira.");
};
