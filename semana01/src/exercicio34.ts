import { randomInt } from 'crypto'
import leia from 'readline-sync'

export default function exercicio34(){

    
    let vetorMinimas:number [] = []
    let vetorMaximas:number [] = []

    for(var i = 0; i<30; i++){
        let valorA = Math.trunc(Math.random() * 23) +12
        let valorB = Math.trunc(Math.random() * 23) +12
    
        vetorMaximas.push((valorA > valorB) ? valorA : valorB)
        vetorMinimas.push((valorA < valorB) ? valorA : valorB)
        
    }

    

    console.log("maximas")
    console.table(vetorMaximas)
    console.log("minimas")
    console.table(vetorMinimas)
    

}
