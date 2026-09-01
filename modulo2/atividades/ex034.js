/* Aula 09 - EX07 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let playlist = ["Faixa A", "Faixa B", "Faixa C"];
let musicaNova = prompt("Qual música será adicionada: ");
let musicaRemover = prompt("Qual música será removida: ");

playlist.push(musicaNova);

if (playlist.indexOf(musicaRemover) == -1){
    console.log("Música não encontrada na playlist.");
} else{
    playlist.splice(playlist.indexOf(musicaRemover), playlist.indexOf(musicaRemover));
    console.log("Música removida.");
};

console.log(playlist.join(', '));