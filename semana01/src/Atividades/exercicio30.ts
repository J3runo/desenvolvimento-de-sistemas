import leia from 'readline-sync'

export default function exercicio30(){

    let vetor: number[] = []
    let vetorMultiplicado: number[] = []

    for(var i = 0; i < 10; i++){
        
        vetor.push(leia.questionInt(`informe um numero. (${i+1}) : `))
    }

    let j = 0
    while(j<vetor.length){
        vetorMultiplicado[j] = vetor[j] * 5
        j++
    } 
    console.table(vetor)
    console.table(vetorMultiplicado)
    


}