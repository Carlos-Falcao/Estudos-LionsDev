import PromptSync from "prompt-sync";
const prompt = PromptSync();

const precoIngresso = 20;
let nomeFilme = prompt(`Qual o nome do filme? `);
let quantidade = Number(prompt(`Quantos ingressos seram comprados? `));
let valorTotal = precoIngresso * quantidade;

console.log(`Filme: ${nomeFilme.toUpperCase()} \nIngressos: ${quantidade} \nValor total: ${valorTotal}`);
