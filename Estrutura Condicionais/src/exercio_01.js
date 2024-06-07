/*Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso 
ele digite a senha “1234” devemos informar a ele “acesso permitido”. Para qualquer 
outra senha digitada, informar “acesso negado”.*/


import leia, { question } from "readline-sync" 

var senha = leia.question("Informe a Senha")

switch (senha);
case "1234" {

function validarSenha() {
    // Solicitando ao usuário que digite a senha
    const senhaDigitada = question("Digite sua senha: ");
  
    // Verificando se a senha é igual a "1234"
    if (senhaDigitada == "1234") {
      console.log("Acesso permitido");
    } else {
      console.log("Acesso negado");
    }
}
  
  // Chamando a função para executar a validação
  validarSenha();
  

