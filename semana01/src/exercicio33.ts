import leia from 'readline-sync'

export default function exercicio33(){

    let vetorNumeros:number [] = []
    let vetorInvertido:number [] = []

    for(var i = 0; i<10; i++){
        vetorNumeros.push((leia.questionInt(`Informe um numero.(${i+1}): `)))
    }

    for(var i = vetorNumeros.length -1; i>=0; i--){
        vetorInvertido.push(vetorNumeros[i])
    }

    vetorNumeros.forEach(original => {
        console.log(`vetor original: ${original}`)
        
    });
    vetorInvertido.forEach(invertido => {
        console.log(`vetor invertido: ${invertido}`)
        
    });
}
