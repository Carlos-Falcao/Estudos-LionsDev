/* Aula 10 - Ex04 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let nome = prompt("Qual o seu nome: ");
let quantidade = Number(prompt("Quantas vezes será repetida a mensagem de boas-vindas: "));
let contador = 1;

while (contador <= quantidade){
    console.log(`Bem-vindo(a), ${nome}`);
    contador += 1;
}