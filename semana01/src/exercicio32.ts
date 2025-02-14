import leia from 'readline-sync'

export default function exercicio32(){

    let vetorNumeros:number [] = []
    let maiores:number [] = []

    for(var i = 0; i<10; i++){
        vetorNumeros.push(leia.questionInt(`informe um numero.(${i}): `))
    }

    vetorNumeros.forEach(element => {
        if(element >= 10){
            maiores.push(element)
        }
    });
    console.log(`Numeros maiores q 10: ${maiores}`)
}
