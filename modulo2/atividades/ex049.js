import PromptSync from "prompt-sync";
const prompt = PromptSync();

let palavra = prompt("Qual é a palavra: ");
let contadorVogais = 0;

for (let i = 0; i <= palavra.length; i++){
    if ('aeiou'.includes(palavra[i])){
        // javascript
        contadorVogais++;
    }
}
console.log(`Quantidade de vogais: ${contadorVogais}`);