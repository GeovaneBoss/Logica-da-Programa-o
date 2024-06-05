
package teste;

import java.util.Scanner;

public class Teste {

    
    public static void main(String[] args) {
      
      Scanner s = new Scanner(System.in);
      
        System.out.println("DIGITE UM NUMERO:");
        
       int valor = s.nextInt();
       
       int antecessor = valor - 1;
       
        System.out.println("O Antecessor é:" + antecessor);
        
        
    }
    
}
