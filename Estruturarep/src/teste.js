import leia from "readline-sync"

var numero = leia.questionInt("Digite o numero: \n")

var multi = 0;

while(multi <= 10){
    console.log(numero + "X" + "=" + (numero * multi))
    multi++;
}
