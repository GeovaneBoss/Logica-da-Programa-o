/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicio_2_altura_e_largura;

import javax.swing.JOptionPane;

/**
 *
 * @author geovane_gonzatto
 */
public class Exercicio_2_altura_e_largura {

    public static void main(String[] args) {
        String larguraStr = JOptionPane.showInputDialog("Digite a largura do retângulo:");
        String alturaStr = JOptionPane.showInputDialog("Digite a altura do retângulo:");
        
        double largura = Double.parseDouble(larguraStr);
        double altura = Double.parseDouble(alturaStr);
        
        double area = largura * altura;
        
        JOptionPane.showMessageDialog(null, "A área do retângulo é: " + area);
    }
}
 
    

