// Aula 11 - Ex01
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let limite = Number(prompt("A contagem será até qual número: "));

for (let i = 1; i <= limite; i++){
    console.log(i);
}