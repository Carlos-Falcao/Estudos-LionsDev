import PromptSync from "prompt-sync";
const prompt = PromptSync();

let vip = prompt("cliente é VIP (sim/nao)? ");
let valorCompra = Number(prompt("Valor da compra: R$ "));

if (valorCompra >= 500 || vip.toLowerCase() === 'sim'){
    console.log("Voce ganhou 20% de desconto!");
} else{
    console.log("Com compras de até R$ 500,00, você ganhará desconto de 20%!");
};
