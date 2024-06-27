/*Crie um algoritmo que receba um número e que ele mostre os números da sequência 
fibonacci. (Exemplo, se o usuário digitar 5, deve ser mostrado até o 5 número da sequência 
fibonacci). Lembrando que a sequência fibonacci, sempre é a soma dos dois números 
anteriores, começando sempre em 1 e 1; 1+1 = 2, 2+1 = 3, 3+2 =5  

import leia from "readline-sync"


// Função para calcular a sequência Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [1];
    if (n === 2) return [1, 1];

    let seq = [1, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

// Ler a entrada do usuário
let num = leia.questionInt(prompt("Digite o número de termos da sequência Fibonacci:"));

// Calcular e exibir a sequência Fibonacci
let sequencia = fibonacci(num);
console.log("Sequência Fibonacci até o " + num + "º termo:", sequencia.join(", "));*/


var numero = leia.questionInt("DIGITE ATE QUE VALOR QUER:");

var anterior = 1    
var atual = 1
var proximo;
var resultado ="1 - 1 "

for( var i - 0; i < numero; i++);
proximo = anterior + atual;
resultado = resultado + " - " + proximo
anterior = resultado
atual = proximo;

console.log(resultado)

