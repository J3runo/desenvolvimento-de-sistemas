import leia from 'readline-sync'

export default function exercicio04(){

    var totalVotos = leia.questionInt("Informe o numero de eleitores: ")
    var brancos = leia.questionInt("Informe o numero de votos brancos: ")
    var nulos = leia.questionInt("Informe o numero de votos nulos: ")

    var validos = totalVotos - (brancos +nulos)

    var perValidos = (validos / totalVotos) * 100
    var perBrancos = (brancos / totalVotos) *100
    var pernulos = (nulos / totalVotos) * 100

    console.log(`Total votos: ${totalVotos.toFixed(1)}%`)
    console.log(`Total votos validos: ${perValidos.toFixed(1)}%`)
    console.log(`Total votos brancos: ${perBrancos.toFixed(1)}%`)
    console.log(`Total votos nulos: ${pernulos.toFixed(1)}%`)

}