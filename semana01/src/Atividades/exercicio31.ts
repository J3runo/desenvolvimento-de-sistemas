import leia from 'readline-sync'

export default function exercicio31(){

    let vetorNumeros:number [] = []
    let pares:number[] = []

    for(var i = 0; i<10; i++){
       
        let numero = leia.questionInt(`Informe um numero.(${i+1}): `)
        if(numero % 2 === 0){
            pares.push(numero)
        }else{
            vetorNumeros.push(numero)
        }
        
    }

    pares.forEach(element => {
        console.log(`numeros pares: ${element}`)
    });
 
}
