// Aula 11 - Ex03
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let numero = Number(prompt("Tabuada de: "));
let resul = 0;

for (let i = 1; i <= 10; i++){
    resul = numero * i;
    console.log(`${numero} X ${i} = ${resul}`);
    resul = 0;
}