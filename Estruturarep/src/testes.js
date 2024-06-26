import leia from "readline-sync"

let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt(`Digite o valor ${i} de 15:`));
    
    if (valor > maior) {
        maior = valor;
    }
    
    if (valor < menor) {
        menor = valor;
    }
}

console.log(`O maior valor digitado foi: ${maior}`);
console.log(`O menor valor digitado foi: ${menor}`);
