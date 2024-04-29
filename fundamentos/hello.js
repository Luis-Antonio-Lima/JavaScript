/**
 * Fundamentos
 * Sintaxe básica da linguagem
 */
//importação de pacotes
const colors = require('colors')

//sentenças
console.log ("Hello World".rainbow)

//blocos
{
    console.log("Hello Java Script")
}

//omissão de chaves em estruturas de controle


let media = 7
if (media >= 5)
    console.log("Aprovado")
else
    console.log("Reprovado")

//funções

let mediaa = 7
if (mediaa >= 5) {
    console.log("Aprovado")
    console.log("Emitir certificado")
} else {
    console.log("Reprovado")
}

for (let x = 1; x < 10; x++) {
    console.log(x)
}