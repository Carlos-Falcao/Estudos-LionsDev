import PromptSync from "prompt-sync";
const prompt = PromptSync();

let temperatura = Number(prompt("Qual a sua temperatura atual (em °C)? "));

if (temperatura >= 38){
    console.log("Febre! Procure um médico.");
} else{
    console.log("Tudo normal.");
};
