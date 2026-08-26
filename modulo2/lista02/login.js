import PromptSync from "prompt-sync";
const prompt = PromptSync();

const loginCorreto = "lions";
const senhaCorreta = "abc123";

let login = prompt("Faça seu login: ");
let senha = prompt("Digite a senha: ");

if (login === loginCorreto && senha === senhaCorreta){
    console.log("Login realizado com sucesso.");
} else if (login === loginCorreto && senha != senhaCorreta){
    console.log("Senha incorreta. Tente novamente.");
} else{
    console.log("Usuario nao encontrado.");
};
