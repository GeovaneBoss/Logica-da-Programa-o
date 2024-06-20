/* Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não 
pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do 
empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. */ 

import leia from "readline-sync"; 


var salario = leia.question ( "Informe o Salario: \n");
var emprestimo = leia.questionfloat ("Informe o valor do emprestimo ");
var parcelas = leia.questionInt("Numero de parcelas ");

var valorparcela = emprestimo / parcelas
var limite = salario * 0.30; 

var mensagem = (valorparcela <= limite) ? "emprestimo Aprovado" : "emprestimo Reprovado"




