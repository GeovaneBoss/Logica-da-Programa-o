/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package exercicio_3_idade_;

import javax.swing.JOptionPane;

/**
 *
 * @author geovane_gonzatto
 */
public class Exercicio_3_idade_ {

    public static void main(String[] args) {
        String anosStr = JOptionPane.showInputDialog("Digite a quantidade de anos:");
        String mesesStr = JOptionPane.showInputDialog("Digite a quantidade de meses:");
        String diasStr = JOptionPane.showInputDialog("Digite a quantidade de dias:");
        
        int anos = Integer.parseInt(anosStr);
        int meses = Integer.parseInt(mesesStr);
        int dias = Integer.parseInt(diasStr);
        
        int totalDias = (anos * 365) + (meses * 30) + dias;
        
        JOptionPane.showMessageDialog(null, "A idade convertida em dias é: " + totalDias);
    }
}
