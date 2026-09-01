/* Aula 09 - Ex05 */

let presentes = [];

presentes.push("Lucas", "Marina", "Pedro");
presentes.splice(presentes.indexOf("Marina"), presentes.indexOf("Marina"));
console.log(`Alunos presentes: ${presentes.length}`);
console.log(presentes.join(', '));