import leia from 'readline-sync'

export default function exercicio06(){

var valorCorridas = []
    
var valorCorridasAtualizados = []

for(var i=0; i<5; i++){

 valorCorridas.push(leia.questionFloat('Digite o valor da corrida R$: '))

}

for (var i = 0; i < valorCorridas.length; i++) {
    valorCorridasAtualizados.push(valorCorridas[i] * 0.25)  
}
console.log("------------------------------------------------------------")
for(var i=0; i<5;i++){

    console.log("Valor da Corrida: " + i+ ": "+ " "+valorCorridas[i] )
}
console.log("------------------------------------------------------------")
for(var i=0; i<5;i++){
console.log("Valor da corrida com desconto: " +i +":" + " "+ valorCorridasAtualizados[i] )
}

var total = 0
for(var i=0; i<5;i++){
    total = total + valorCorridasAtualizados[i]
    }
console.log("Valor total: "+ total)
}