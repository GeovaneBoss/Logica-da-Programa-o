import leia from "readline-sync"

var opcaoJogo = leia.keyInSelect(["PvP", "PvE"]) //KeyInselect serve para mostrar em opçoes// 
var numeromagico;
var tentativas = 0;

if (opcaoJogo === 0) {
    numeromagico = leia.questionInt("Digite o numero magico:",
        {
            hideEchoBack: true // Bloco para nao aparecer o numero indicado, e sim o asterisco no lugar `*`.
            //pedir numero magico 
        })
} else if (opcaoJogo === 1) {
    var dificuldade = leia.keyInSelect(["Facil", "Medio", "Dificil"])

    switch (dificuldade) {
        case 0:
            numeromagico = parseInt(Math.random() * 10)
            break;
        case 1:
            numeromagico = parseInt(Math.random() * 100)
            break;
        case 2:
            numeromagico = parseInt(Math.random() * 100)
            break;

    }
    //sortear Numero

}

do {
    var palpite = leia.questionInt("Digite o seu Palpite");
    if (palpite > numeromagico) {
        console.log("Numero Magico É Menor")

    } else if (palpite < numeromagico) {
        console.log("Numero Magico É Maior")
    } else {
        { console.log("Acertou Mestre") }
    }
    tentativas++
} 

while (palpite !== numeromagico);

console.log("Voce Precisou de " + tentativas + "Tentativas Para Acertar")




