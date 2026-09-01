/* Aula 10 - Ex08 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const numeroSecreto = 42;
let palpite = 0;

while (palpite != numeroSecreto){
    palpite = Number(prompt("Digite seu palpite: "));
    if (palpite > numeroSecreto){
        console.log("Muito alto!");
    } else{
        console.log("Muito baixo!");
    }
}
console.log("Você acertou!");