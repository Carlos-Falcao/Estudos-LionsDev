import PromptSync from "prompt-sync";
const prompt = PromptSync();

let diaSemana = prompt("Qual o dia da semana? ");

if (diaSemana.toLowerCase() === 'sabado' || diaSemana.toLowerCase() === 'domingo'){
    console.log("Fim de semana.");
} else{
    console.log("Dia útil.");
};
