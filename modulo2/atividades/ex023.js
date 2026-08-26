import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ladoA = Number(prompt("Digite o valor do lado A: "));
let ladoB = Number(prompt("Digite o valor do lado B: "));
let ladoC = Number(prompt("Digite o valor do lado C: "));

if (ladoA == ladoB && ladoB == ladoC){
    console.log("Triângulo equilátero.");
} else{
    console.log("Triângulo não equilátero.");
};
