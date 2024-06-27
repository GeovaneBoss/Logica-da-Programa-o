/*Faça um algoritmo que receba um número e ele calcule o fatorial desse número. O Fatorial, é 
o número vezes todos os valores multiplicados */ 

import leia from "readline-sync"

var numero = leia.questionInt("Digite um numero: ")
var resultado = 1;

while(numero > 0 ){
resultado = resultado * numero;
numero--;
}

console.log("fatorial de " + resultado )
