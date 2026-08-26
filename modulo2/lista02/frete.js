import PromptSync from "prompt-sync";
const prompt = PromptSync();

let pesoPacote = Number(prompt("Digite o peso do pacote (em Kg): "));

if (pesoPacote < 0){
    console.log("Peso inválido.");
} else if (pesoPacote <= 1){
    console.log(`Peso: ${pesoPacote} Kg \nFrete: R$ 10`);
} else if (pesoPacote <= 5){
    console.log(`Peso: ${pesoPacote} Kg \nFrete: R$ 25`);
} else if (pesoPacote <= 10){
    console.log(`Peso: ${pesoPacote} Kg \nFrete: R$ 40`);
} else{
    console.log(`Peso: ${pesoPacote} Kg \nFrete: R$ 60`);
};
