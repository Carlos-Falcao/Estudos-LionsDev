/* Aula 10 - Ex09 */

let vendas = [120, 340, 95, 460, 200];
let indice = 0;
let total = 0;

while (indice < vendas.length){
    total += vendas[indice];
    indice += 1;
}
console.log(`Total de vendas: ${total}`);