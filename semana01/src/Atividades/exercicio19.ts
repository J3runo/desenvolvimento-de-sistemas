import leia from 'readline-sync'

export default function exercicio19(){

   let numeroDigitado = leia.questionInt("Informe o numero final: ")

   for(var i=0; i<= numeroDigitado; i++)
 console.log(`Breno é otario ${i} vezes`)
}