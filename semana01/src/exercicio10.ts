import leia, { keyInSelect } from 'readline-sync'

export default function exercicio10(){

    let numero = leia.questionInt("Digite um numero: ")

    let result = numero % 2 
    
    if(result == 0){
        console.log("Numero é Par")
    }else{
        console.log("Numero é impar")
    }
}