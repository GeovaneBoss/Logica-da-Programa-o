//Faça um algoritmo que leia um número e mostre os números de 0 até o valor informado pelo usuario

import leia from "readline-sync"

var numero = leia.questionFloat("Digite um numero")

for (var i = 0; i <= numero; i++) {
    console.log(i);
}

