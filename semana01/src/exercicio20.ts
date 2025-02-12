import leia from 'readline-sync'

export default function exercicio20(){

   let numeroDigitado = leia.questionInt("Informe o numero inicial: ")

   for(var i=numeroDigitado; i>=0; i--)
 console.log(`N° ${i} vezes`)
}