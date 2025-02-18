import leia from 'readline-sync'

export default function exercicio24(){

let qualTabuada = leia.questionInt("Digite qual a tabuada vc deseja: ")
let ateQual = leia.questionInt("Digite ate qual numero: ")

for(var i=1; i<=ateQual; i++){
  let resultado = qualTabuada * i
  console.log(` ${qualTabuada} X ${i} : ${resultado}`)
  
}

}