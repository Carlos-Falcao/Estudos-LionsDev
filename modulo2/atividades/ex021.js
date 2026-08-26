import PromptSync from "prompt-sync";
const prompt = PromptSync();

const saldo = 200;
let valorCompra = Number(prompt("Digite o valor da compra: "));

if (saldo >= valorCompra){
    console.log("Saldo suficiente.");
} else{
    console.log("Saldo insuficiente.");
};
