import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = prompt("Digite um número (entre 100 e 999): ");

if (numero.length == 3){
    if (numero[0] == numero[2]){
        console.log(`${numero} é um código palindromo.`);
    } else{
        console.log(`${numero} não é um código palindromo.`)
    }
} else{
    console.log("código inválido.");
    console.log(numero.length)
};
