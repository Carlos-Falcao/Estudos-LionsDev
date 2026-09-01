/* Aula 10 - Ex02 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let senha = "";

while (senha.length < 8){
    senha = prompt("Digite sua senha: ");
    if (senha.length < 8){
        console.log("Digite uma senha maior.");
    }
}
console.log("Senha cadastrada com sucesso!");