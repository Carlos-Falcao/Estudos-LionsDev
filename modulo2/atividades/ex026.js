import PromptSync from "prompt-sync";
const prompt = PromptSync();

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Qual operação será feita? + | - | * | /: ");
let resultado = 0;

switch (operacao){
    case ("+"):
        {
            resultado = num1 + num2;
            break;
        }
    case ("-"):
        {
            resultado = num1 - num2;
            break;
        }
    case ("*"):
        {
            resultado = num1 * num2;
            break;
        }
    case ("/"):
        {
            resultado = num1 / num2;
            break;
        }
    default:
        console.log("Operação inválida!");
}

console.log(`Resultado de ${num1} ${operacao} ${num2} = ${resultado}`);