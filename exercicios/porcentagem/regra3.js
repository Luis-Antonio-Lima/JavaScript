/**
 * Regra de 3
 */

//importação do pacote
const read = require('readline-sync')

//declaração de variáveis
let x, y, valor

console.clear()
console.log("Regra de 3")
console.log("X% de Y = valor")

//entrada de dados
x = read.question("Digite o valor de X: ")
y = read.question("Digite o valor de Y: ")

//processamento
valor = (x * y) / 100

//saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)