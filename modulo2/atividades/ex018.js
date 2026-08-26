import PromptSync from "prompt-sync";
const prompt = PromptSync();

const senhaCorreta = "lions123";
let senhaDigitada = prompt("Digite a senha: ");

if (senhaDigitada === senhaCorreta){
    console.log("Acesso permitido.");
} else{
    console.log("Acesso negado.");
};
