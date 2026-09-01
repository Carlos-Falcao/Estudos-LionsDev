/* Aula 10 - Ex03 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let soma = 0;
let numero = Number(prompt("Qual número será somado (0 para encerra o programa): "));

while (numero !== 0){
    soma += numero;
    numero = Number(prompt("Qual número será somado (0 para encerra o programa): "));
}
console.log(`Soma total: ${soma}`);