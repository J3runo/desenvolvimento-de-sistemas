import leia from 'readline-sync'

export default function exercicio27(){
let qtdNumero = 0
let numeroDigitado


do {
    numeroDigitado= leia.questionInt("Digite um numero: ")
    if(numeroDigitado > 100 && numeroDigitado < 200){
        qtdNumero++
    }
} while (numeroDigitado!== 0);
 console.log(`Numeros entre 100 e 200 foram ${qtdNumero}`)

}