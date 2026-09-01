/* Aula 10 - Ex01 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = 1;
let limite = Number(prompt("Qual o número limite: "));

while (numero <= limite){
    console.log(numero);
    numero += 1;
}