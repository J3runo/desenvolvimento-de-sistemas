import leia from 'readline-sync'
import { isConstructorDeclaration } from 'typescript'

export default function exercicio48(){

    class pessoa {
        nome:string
        idade:number

        constructor(nome:string, idade:number){

            this.nome = nome,
            this.idade = idade
        }
        
        public Apresentar(){
            console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos`)
        }
        
    }
    let nome = leia.question("Informe seu nome: ")
    let idade = leia.questionInt("Informe sua idade: ")

   var pessoa1 = new pessoa(nome,idade)
   pessoa1.Apresentar()

}