/**
 * Estrutura de dados
 * Objetos
 * @author Luís Antônio de Paula Lima
 */

const funcionario1 = {}
console.log (typeof funcionario1)

//adicionar dados a estrutura (CRUD Create) 
funcionario1.nome = "Luis"
funcionario1.cargo = "Estudante"
funcionario1.emaii = "luis@email.com"
funcionario1.salario = 8000
funcionario1.insta = "@semInsta"

console.log(funcionario1)
console.log(cargo)

//listar os dados da estrutura (CRUD Update)
funcionario1.nome = "Luis Antônio"
console.log(funcionario1)

delete funcionario1.insta

const funcionario2 = {
    nome: 'Bruce Wayne',
    cargo: 'CEO',
    email: 'Bruce@gmail.com',
    salario: 300000
    
}

console.log(funcionario2)

const endereco1 = {
    logradouro: 'Bat Caverna',
    cidade: 'Gothan City',
    estado: 'Nova Jersey'
}

const funcionario3 = {
    nome: 'Alfred',
    cargo: 'mordomo',
    email: 'alfred@yahoo.com',
    salario: 2000
    ...endereco1 //... spread operator (união de 2 estruturas)
}

console.log (funcionario3)

const funcionario4 = {
    nome: 'Tony Stark',
    cargo: 'Engenheiro',
    email: 'ironman@gmail.com',
    salario: 375000,
    armadura:{
        versao: 'Mark 2',
        ano: 2010,
        reator: 'Arc 01'
    },
    suitUp:() => {
        console.log('🤖')
    }
}

console.log(funcionario4)
console.log(funcionario4.armadura.versao)
funcionario4.suitUp() //executar a função interna da estrutura