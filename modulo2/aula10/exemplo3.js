let estoque = 5;

while (estoque >= 0){
    console.log("Uma unidade do produto foi vendido.");
    estoque -= 1;

    if (estoque == 0){
        console.log("Estoque está vazio!");
    }
}