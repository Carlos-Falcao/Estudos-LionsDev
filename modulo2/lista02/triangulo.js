import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ladoA = Number(prompt("Digite o valor do lado A: "));
let ladoB = Number(prompt("Digite o valor do lado B: "));
let ladoC = Number(prompt("Digite o valor do lado C: "));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA){
    if (ladoA == ladoB && ladoB == ladoC){
        console.log("Triângulo equilátero.");
    } else if ((ladoA == ladoB || ladoA == ladoC && ladoB != ladoC) || (ladoB == ladoC && ladoA != ladoB)){
        console.log("Triangulo isosceles.");
    } else{
        console.log("Triângulo escaleno.");
    };
} else{
    console.log("Esses valores não podem formar um triangulo.");
};
