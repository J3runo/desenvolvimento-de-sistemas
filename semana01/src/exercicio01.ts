import leia from 'readline-sync'

export default function exercicio01(){

var n = leia.questionInt('Digite um numero: ')
console.log(`Seu numero é ${n} O numero antecessor é ${(n-1)} O numero sucessor é ${n+1}`)

}