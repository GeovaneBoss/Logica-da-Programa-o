//Escreva um algoritmo que leia 15 valores inteiros e, ao final, mostre qual foi o maior e o menor 
//entre os valores digitados

import leia from "readline-sinc"

var maior =  
var menor = 
var numero = leia.questionInt("Digite um numero")


console.log("O maior valor digitado foi" numero + maior );
console.log("O menor valor digitado foi:" numero + menor);

for (var i = 0; i <= 15; i++) {
    // Solicite ao usuário que digite o valor
    var valor = console.log(`Digite o valor ${i} de 15:`);
    
    // Verifique se o valor é maior que o atual 'maior'
    if (valor > maior) {
        maior = valor;
    }
    
    // Verifique se o valor é menor que o atual 'menor'
    if (valor < menor) {
        menor = valor;
    }
}


var numeros = []; // Inicializa um array para armazenar os números

for (var i = 0; i < 15; i++) {
    var valor = console.log("Digite o valor " + (i + 1) + " de 15:");
    numeros.push(valor); // Adiciona o valor digitado ao array
}



console.log(`O maior valor digitado foi: ${maior}`);
console.log(`O menor valor digitado foi: ${menor}`);


---------------------------------

var numeros = []; // Inicializa um array para armazenar os números

for (var i = 0; i < 15; i++) {
    var valor = console.log("Digite o valor " + (i + 1) + " de 15:");
    numeros.push(valor); // Adiciona o valor digitado ao array
}

console.log("Os valores digitados foram:", numeros);
