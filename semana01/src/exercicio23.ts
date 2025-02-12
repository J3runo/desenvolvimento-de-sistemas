import leia from 'readline-sync'

export default function exercicio23(){

 let ncopias = leia.questionInt("Digite a quantidade de copias: ")
 let valor

  for(var i=0; i<=ncopias; i++){
  valor = ncopias * 0.33
 
  }

  console.log(`O valor de ${ncopias} copias é R$: ${valor} `)
}