import leia from 'readline-sync'

export default function exercicio13(){

   let cliente1 = leia.question("Informe seu nome do cliente1: ")
   let valorCliente1 = leia.questionFloat("informe valor da compra cliente1: ")
   
   let cliente2 = leia.question("Informe seu nome do cliente2: ")
   let valorCliente2 = leia.questionFloat("informe valor da compra cliente2: ")

let valorTotal = valorCliente1 + valorCliente2
console.log("Valor total dos dois clientes R$: "+ valorTotal)

let valorMedio = valorTotal / 2
console.log("Valor medio gasto R$: "+ valorMedio)

console.log("Clientes que gastaram mais de R$20,00")
if(valorCliente1 < 20 && valorCliente2 < 20){
   console.log("Ninguem gastou mais de R$:20,00")
   return;
}

// ternario
valorCliente1 > 20 && console.log(cliente1)
valorCliente2 > 20 && console.log(cliente2)
}