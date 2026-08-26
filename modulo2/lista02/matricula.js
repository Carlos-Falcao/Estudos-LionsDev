import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Digite sua idade: "));
let mensalidade = prompt("Mensalidade em dia: ");

if (idade >= 16 && mensalidade.toLowerCase() === "sim"){
    console.log("Matricula confirmada.");
} else if (idade >= 16 && mensalidade.toLowerCase() === "nao"){
    console.log("Mensalidade em atraso.");
} else{
    console.log("Matricula pendente.");
};
