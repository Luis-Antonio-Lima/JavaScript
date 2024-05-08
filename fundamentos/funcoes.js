/**
 * EStudo das funções usando a sintaxe moderna da linguagem
 * @author Luís Antônio de Paula Lima
 */

console.clear()

//Função simples (literal)
function hello() {
    console.log("Hello function")
}

hello()

console.log(typeof hello)

//função anônima
const hello2 = function() {
    console.log("Hello function assigned")
}

hello2()

console.log(typeof hello2)

//função anônima simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function assigned")
}

hello3()

console.log(typeof hello3)

//função anônima super simplificada (Arrow function)
const hello4 = _=> console.log("Hello arrow function assigned simplified")

hello4()

console.log(typeof hello4)

//função simples com retorno
function somarS(num1, num2) {
    return console.log(num1 + num2)
}

somarS(2, 3)
console.log(typeof somarS)

//função anônima com retorno
let somarA = function(num1, num2) {
    return console.log(num1 + num2)
}

somarA(2, 3)
console.log(somarA)
console.log(typeof somarA)

//função anônima simplificada com retorno
let somarAF = (num1, num2) => {
    return console.log(num1 + num2)
}

somarAF(2, 3)
console.log(typeof somarAF)

//função anônima super simplificada com retorno
let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(2, 3)
console.log(typeof somarAFS)