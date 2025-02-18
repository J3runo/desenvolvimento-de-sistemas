import leia from 'readline-sync'

export default function exercicio03(){

var anos = leia.questionInt("Digite sua idade: ")
var meses = leia.questionInt("Digite quantos meses: ")
var dias = leia.questionInt("Digite quantos dias: ")

var diasTotais = (anos * 365) + (30 * meses) + dias 

console.log(`Total de dias vividos ${diasTotais}`)
}