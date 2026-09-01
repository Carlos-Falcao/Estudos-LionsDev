/* Aula 09 - Ex02 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let fila = ["Ana", "Bruno", "Carla"];

console.log(`Atendendo: ${fila[0]}`);
fila.shift();

let novaPessoa = prompt("Qual o nome da pessoa que vai entrar na fila? ");
fila.push(novaPessoa);
console.log(`Nova fila: ${fila.join(", ")}`);