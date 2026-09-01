let frutas = ["uva", "maçã", "banana"];
let copia = frutas.slice(0, 3);

console.log(`Cópia: ${copia}`)
console.log(frutas.join(", ")); // "uva, maçã, banana"
frutas.sort();
console.log(frutas); // ["banana", "maçã", "uva"]