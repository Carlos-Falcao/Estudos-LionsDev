import PromptSync from "prompt-sync";
const prompt = PromptSync();

let produto = prompt("Qual produto você deseja? ");
let preco = 0;

switch (produto){
    case ("Hamburguer"):
        {
            preco = 18;
            break;
        }
    case ("Batata Frita"):
        {
            preco = 10;
            break;
        }
    case ("Refrigerante"):
        {
            preco = 7;
            break;
        }
    default:
        console.log("Produto inválido");
}

console.log(`Produto desejado: ${produto} \nPreço: R$ ${preco}`);