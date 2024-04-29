/**
 * Tipagem dinâmica
 * Constante e variáveis
 */

console.clear()
console.log("STRINGS___________________")
let nome = "Luís Antônio"
console.log(nome)
console.log(typeof(nome))
nome = "Luís"
console.log(nome)
console.log(nome.replace("Luís" , "Luís Lima"))

//concatenação
console.log("Aluno: " + nome)
console.log(`Aluno: ${nome}`)

console.log("NUMBERS___________________")
let peso = 50
let altura = 1.78
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger (peso))
console.log(Number.isInteger (altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("BOOLEANS__________________")
let sw = true
console.log(typeof(sw))
console.log(`Chave: ${sw}`)

// ATENÇÃO !!!
console.log(10 / 0)
console.log("3" + 2) //concatena
console.log("3" - 2) //faz o calculo
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2) //NaN (Not a number)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)