import PromptSync from "prompt-sync";
const prompt = PromptSync();

let array = []
array.push(1)
array.push(2)
array.push(3)

console.log(array)

let num = Number(prompt("Digite um número: "))
array. push(num)
console.log(array)

array.unshift(0)
console.log(array)