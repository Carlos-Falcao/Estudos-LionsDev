/* Aula 09 - Ex08 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let assentosOcupados = ["A1", "A2", "B1"];
let assentoDesejado = prompt("Qual o assento você deseja: ");

if (assentosOcupados.includes(assentoDesejado) === true){
    console.log("Assento indisponível.");
} else{
    assentosOcupados.push(assentoDesejado);
    console.log("Reserva confirmada!");
}

console.log(assentosOcupados.join(', '));