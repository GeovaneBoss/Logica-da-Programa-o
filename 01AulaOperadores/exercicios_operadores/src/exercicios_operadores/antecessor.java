/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicios_operadores;

import javax.swing.JOptionPane;

public class antecessor {
    public static void main(String[] args) {
        // Solicita ao usuário que insira um número
        String entrada = JOptionPane.showInputDialog("Digite um número:");
        
        // Converte a entrada do usuário para um inteiro
        int numero = Integer.parseInt(entrada);
        
        // Calcula o antecessor
        int antecessor = numero - 1;
        
        // Exibe o antecessor para o usuário
        JOptionPane.showMessageDialog(null, "O antecessor de " + numero + " é " + antecessor);
    }
}


