/* Aula 10 - Ex10 */
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const codigoCorreto = "1234";
let tentativas = 0;
let acessoLiberado = false;

while (tentativas < 3 && acessoLiberado === false){
    let codigoDigitado = prompt("Digite o código (4 digitos): ");
    if (codigoDigitado.length != 4){
        console.log("O código deve possuir 4 digitos!");
        tentativas += 1;
    } else if (codigoDigitado != codigoCorreto){
        console.log("Código incorreto!");
        tentativas += 1;
    } else{
        console.log("Cofre liberado!");
        acessoLiberado = true;
    }
    if (acessoLiberado === false){
        console.log("Cofre Bloqueado!");
    }
}