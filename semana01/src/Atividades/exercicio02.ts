import leia from 'readline-sync'

export default function exercicio02(){

var largura = leia.questionInt('Digite a largura do retangulo: ')
var altura = leia.questionInt('Digite a altura do retangulo: ')
var area = largura * altura

console.log(`A area do retangulo é ${area} m2`)
}