import PromptSync from "prompt-sync";
const prompt = PromptSync();

let velocidade = prompt("Velocidade do carro (em km/h)? ");

if (velocidade > 60){
    console.log("Multa aplicada!");
} else{
    console.log("Limite da via.");
};
