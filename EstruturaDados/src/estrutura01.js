/*Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em 
um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5. 
Por fim exiba os dois vetores.*/ 


import leia from "readline-sync";
 
 var lista = [] 
 var lista1 = [] *5 

 
 for(var i = 0; i <= 10; i++){
  lista[i] = leia.questionInt("Informe o numero");
    console.log(lista); }

    for(var i = 0; i < lista.length; i++){
      lista1 [i] = lista[i] * 5;
          }
    
 console.log(lista)

 

