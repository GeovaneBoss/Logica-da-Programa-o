/* Estamos desenvolvendo o sistema de doações do Criança Esperança. O sistema deve 
solicitar para o doador o quanto ele pretende doar. Atualmente existem 3 valores padrões, 
são eles: R$10, R$25 e R$50. Caso o doador queira doar um valor diferente, também é 
possível através de uma opção que vai solicitar ao usuário um valor. Ao final o sistema deve 
mostrar qual o valor doado e também agradecer o doador.*/

import leia from "readline-sync"

var timeA = leia.questionInt ("INFORME QTD GOLS TIME A ");
var timeB = leia.questionInt ("INFORME QTD GOLS TIME B ");

var diferenca = Math.abs(TimeA - TimeB);

switch (diferenca) {
    case 0:
        console.log("Empate")
        break;
case 1: 
case 2: 
case 3: 
console.log("Jogo Normal")
    default:
        console.log("GOLEADA")
        break;
}


