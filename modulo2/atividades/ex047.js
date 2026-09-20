// Aula 11 - Ex02
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let n = Number(prompt("Valor final até a soma: "));
let soma = 0;

for (let i = 1; i <= n; i++){
    soma += i;
}
console.log(soma);