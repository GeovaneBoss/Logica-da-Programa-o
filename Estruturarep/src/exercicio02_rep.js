// Faça um programa que leia um número e mostre os números de do valor informado até



import leia from "readline-sync"

var numero = leia.questionFloat("Digite um numero")

for (var i = numero; i >= 0; i--) {
    console.log(i);
}


while(numero >0 ){

console.log(numero);
numero--
}