import PromptSync from "prompt-sync";
const prompt = PromptSync();

let tamanhoDesejado = prompt("Qual o Tamanho da roupa desejada (P, M, G, GG): ").toUpperCase();

switch (tamanhoDesejado){
    case ("P"):
        {
            console.log("Tamanho Pequeno.");
            break;
        }
    case ("M"):
        {
            console.log("Tamanho Médio.");
            break;
        }
    case ("G"):
        {
            console.log("Tamanho Grande.");
            break;
        }
    case ("GG"):
        {
            console.log("Tamanho Extra Grande.");
            break;
        }
    default:
        console.log("Tamanho inválido ou indisponivel.");
}