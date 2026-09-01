/* Aula 09 - Ex06 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let acervo = ["Dom Casmurro", "O Hobbit", "1984"];
let livroBuscado = prompt("Qual o livro que você está buscando: ");

if (acervo.includes(livroBuscado)){
    console.log("Disponível.");
} else{
    console.log("Indisponível.");
    acervo.push(livroBuscado);
};

console.log(acervo.join(', '));