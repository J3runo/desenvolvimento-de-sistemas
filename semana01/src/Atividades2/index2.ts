import leia from 'readline-sync'

import exercicio48 from './exercicio1';
import exercicio49 from './exercicio2';
import exercicio50 from './exercicio3';


var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02", "Exercicio 03", "Exercicio 04", "Exercicio 05", "Exercicio 06", "Exercicio 07", "Exercicio 08", "Exercicio 09", "Exercicio 10",
    "Exercicio 11", "Exercicio 12", "Exercicio 13", "Exercicio 14", "Exercicio 15", "Exercicio 16", "Exercicio 17", "Exercicio 18", "exercicio 19", "exercicio 20", "exercicio 21", "exercicio 22",
    "exercicio 23", "exercicio 24", "Exercicio 25", "Exercicio 26", "Exercicio 27", "Exercicio 28", "Exercicio 29", "Exercicio 30", "Exercicio 31", "Exercicio 32", "Exercicio 33", "Exercicio 34"]) + 1

switch (opcao) {
    case 1:
        exercicio48()
        break;
    case 2:
        exercicio49()
        break;
    case 3:
        exercicio50()
        break;

}
