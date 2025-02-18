import leia, { keyInSelect } from 'readline-sync'

export default function exercicio09(){

var senha = 1234 
var senhaDigitada


while(!(senhaDigitada == senha)){ 
    senhaDigitada = leia.questionInt("Digite a senha: ")
    if(senhaDigitada === senha){
        console.log("--------------")
        console.log("Autorizado!")
        console.log("--------------")
    }else{
        console.log("--------------")
        console.log("Acesso negado")
    }
}
}