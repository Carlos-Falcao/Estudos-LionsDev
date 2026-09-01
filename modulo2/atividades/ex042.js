/* Aula 10 - Ex07 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let saldo = 200;

while (saldo > 0){
    let valorSaque = Number(prompt("Qual o valor do saque: "));
    if (valorSaque <= saldo){
        saldo -= valorSaque;
        console.log(`Valor saldo atualizado: ${saldo}`);
    } else{
        console.log("Saldo insuficiente.");
    }
}
console.log("Saldo zerado!");