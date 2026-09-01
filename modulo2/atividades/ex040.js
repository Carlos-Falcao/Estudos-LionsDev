/* Aula 10 - Ex05 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let contador = Number(prompt("Contador iniciando de: "));

while (contador > 0){
    console.log(contador);
    contador -= 1;
}
if (contador === 0){
    console.log("Lançamento!");
}