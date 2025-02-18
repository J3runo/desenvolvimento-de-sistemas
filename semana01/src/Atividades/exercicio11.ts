import leia from 'readline-sync'

export default function exercicio11(){

let placa = leia.question("Digite a placa: ")
let ultimoDigito;

for(var i=0; i<placa.length; i++){
 ultimoDigito = placa[i]
}

if(ultimoDigito === "0" || ultimoDigito === "1"){
    console.log("Nao pode rodar na segunda-feira ")
    return
}else if(ultimoDigito === "2" || ultimoDigito === "3"){
    console.log("Nao pode rodar na terca-feira ")
    return
}else if(ultimoDigito === "4" || ultimoDigito === "5"){
    console.log("Nao pode rodar na quarta-feira ")
    return
}else if(ultimoDigito === "6" || ultimoDigito === "7"){
    console.log("Nao pode rodar na quinta-feira ")
    return
}else if(ultimoDigito === "8" || ultimoDigito === "9"){
    console.log("Nao pode rodar na sexta-feira ")
    return
}


}