import leia from 'readline-sync'

export default function exercicio05(){

console.log("Para qual vc quer converter? ")
var opcao = leia.keyInSelect(['Fahrenheit','Kelvin']) + 1

function Fahrenheit(){
    var temperatura = leia.questionFloat('Digite a temperatura a ser convertida para Fahrenheit: ')

    var conversao = temperatura * 1.8 + 32
console.log('Temperatura convertida para Fahrenheit é ' + conversao + "F°")
}

function Kelvin(){
    var temperatura = leia.questionFloat('Digite a temperatura a ser convertida para Kelvin: ')

    var conversao = temperatura + 273.15
console.log('Temperatura convertida para Kelvin é ' + conversao + "K°")
}


switch(opcao){
    case 1:
        Fahrenheit()
        break
    case 2:
        Kelvin()
        break
}

}