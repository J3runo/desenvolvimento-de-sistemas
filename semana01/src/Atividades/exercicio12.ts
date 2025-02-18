import leia from 'readline-sync'

export default function exercicio12(){

var qtd = leia.questionInt("Digite a quantidade de maca: ")
var total

function menosDuzia(){
   total = qtd * 0.30
   console.log("Valor total a pagar!!! R$: "+ total)
}

function maisDuzia(){
    total = qtd * 0.25
    console.log("Valor total a pagar!!! R$: "+ total)
 }
 
 if(qtd < 12){
    menosDuzia()
 }else{
    maisDuzia()
}

}