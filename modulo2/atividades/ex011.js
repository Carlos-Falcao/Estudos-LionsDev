import promptSync from 'prompt-sync';
const prompt = promptSync();

let nome = prompt('Qual o seu nome? ');
let anoNascimento = Number(prompt('Que ano você nasceu? '));

let idade = 2026 - anoNascimento;

console.log(`Bem-vinda ${nome}! \nIdade aproximada: ${idade} anos.`);
