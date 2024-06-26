import leia from "readline-sync"

var nota = leia.questionFloat("Digite a nota: \n");

while(nota <0.0 || nota > 10.0){  //compara e depois executa
    console.log("notainvalida");
    nota = leia.questionFloat("digite a nota novamente")
}

console.log ("nota valida")

for (var i = 0; i <10; i++){      //executa e depois comparar
console.log (i)
}
