import PromptSync from "prompt-sync";
const prompt = PromptSync();

let senha = prompt("Crie uma senha? ");

if (senha.length < 6){
    console.log("Senha fraca, use mais caracteres.");
} else{
    console.log("Senha criada.");
};
