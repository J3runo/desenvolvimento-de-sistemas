import leia from 'readline-sync'
import { isConstructorDeclaration } from 'typescript'

export default function exercicio49(){

    class lampada {
        ligada:boolean;
        
        constructor(){

            this.ligada = false
        }
        
        public Ligar(){
            this.ligada = true
            console.log(`A lampada esta ligada`)
        }
        public desligar(){
            this.ligada = false
            console.log(`A lampada esta desligada`)
        }
        
        public status(){
            if(this.ligada === true){

                console.log(`A lampada esta acesa`)
            }else{
                console.log("A lampada esta apagada")
            }
        }
        
    }
    
    

   var lampada1 = new lampada()
   lampada1.status()
   lampada1.Ligar()
   lampada1.status()
   lampada1.desligar()
   lampada1.status()

}