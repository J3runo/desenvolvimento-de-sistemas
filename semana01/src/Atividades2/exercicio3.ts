import leia from 'readline-sync'
import { isConstructorDeclaration } from 'typescript'

export default function exercicio50(){



    function multiplo(){
    let cont = 0
        for(var i=0; i<=200; i++){
            if(i % 5 === 0){
                cont++
                console.log(i)
            }
        }
        console.log(cont)
    }
    multiplo()

    // class calculadora {
     
    //     somar(a:number, b:number): number {
    //        return a + b
    //     }
    //     subtrair(a:number, b:number): number {
    //        return a - b
    //     }
    //     dividir(a:number, b:number): number {
    //        return a / b
    //     }
    //     multiplicar(a:number, b:number): number {
    //        return a * b
    //     }
      
    // }
    
    // let calculadora1 = new calculadora()
    
    // let opçao = leia.keyInSelect(["Somar","subtrair", "dividir","Multiplicar"]) +1 
    // let valorA = leia.questionFloat(`Informe um valor: `)
    // let valorB = leia.questionFloat(`Informe outro valor: `)
    
    
    // if(opçao === 1){
    //    console.log( calculadora1.somar(valorA, valorB))
    // }else if(opçao === 2){
    //     console.log( calculadora1.subtrair(valorA, valorB))
    // }else if(opçao === 3){
    //     console.log( calculadora1.dividir(valorA, valorB))
    // }else if(opçao === 4){
    //     console.log( calculadora1.multiplicar(valorA, valorB))
    // }

}