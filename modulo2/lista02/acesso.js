import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 16){
    console.log("Acesso liberado! Bem-vindo ao Discord da turma.")
} else{
    console.log("Acesso negado.");
};
