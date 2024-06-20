import leia from "readline-sync";


var mesdoano = leia.questionInt("DIGITE O MES EM NUMERO")

switch (mesdoano) {
    case 2:
        console.log("28/29 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias");
        break
        console.log("31 dias");
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      break;
    default:
        console.log("mes invalido")
}






