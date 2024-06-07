//2) Desenvolva um programa para descobrir se o número lido no teclado é par ou ímpar.

import leia from "readline-sync"

const numero = leia.questionInt("Insira um numero");

    if (numero % 2 == 0) {
      console.log("O número " + numero + " é par.");
    } else {
      console.log("O número " + numero + " é ímpar.");
    }


  