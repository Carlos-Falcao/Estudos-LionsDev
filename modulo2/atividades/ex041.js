/* Aula 10 - Ex06 */

let carrinho = [50, 30, 20];
let total = 0;

while (carrinho.length > 0){
    total += carrinho[0];
    carrinho.shift();
}
console.log(`Total da compra: ${total}`);