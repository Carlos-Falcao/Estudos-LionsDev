const precoA = 40;
const precoB = 60;
const precoC = 25;
const exigencia = 100;

if (precoA + precoB == exigencia){
    console.log("Os produtos A e B somam R$ 100 e liberam o cupom.");
} else if (precoA + precoC == exigencia){
    console.log("Os produtos A e C somam R$ 100 e liberam o cupom.");
} else if (precoB + precoC == exigencia){
    console.log("Os produtos B e C somam R$ 100 e liberam o cupom.");
} else{
    console.log("Exigencia não comprida, cupom bloqueado.");
};
