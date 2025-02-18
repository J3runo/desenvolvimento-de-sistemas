import leia from 'readline-sync'

export default function exercicio22(){

  let nvezes = leia.questionInt("Digite quanto vez quer colocar o valor: ")
  var numeroMaior = 0
  var numeroMenor = 0
  


  for(var i=0; i<nvezes; i++){
    var numeroDigitado = leia.questionInt("Digite um numero: ")
    if(i === 0){
      numeroMaior = numeroDigitado
      numeroMenor = numeroDigitado
    }
    if(numeroDigitado > numeroMaior){
      numeroMaior = numeroDigitado
    }
    else if (numeroDigitado < numeroMenor){
      numeroMenor = numeroDigitado
    }
  }

  console.log(`O maior numero digitado foi: ${numeroMaior}`)
  console.log(`O menor numero digitado foi: ${numeroMenor}`)
}