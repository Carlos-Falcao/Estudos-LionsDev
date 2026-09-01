import PromptSync from "prompt-sync";
const prompt = PromptSync();

let senhaCorreta = "lions123";
let numeroTentativas = 0;
let acessoLiberado = false;

while (numeroTentativas < 3 && acessoLiberado === false){
    let senhaDigitada = prompt("Digite a sua senha: ");
    if (senhaDigitada === senhaCorreta){
        console.log("Senha correta, acesso liberado!");
        acessoLiberado = true;
    } else{
        console.log("Senha incorreta, digite novamente.");
        numeroTentativas += 1;
    }
}

if (acessoLiberado === false){
    console.log("Tentativas de acesso excedidas, conta bloqueada!");
}