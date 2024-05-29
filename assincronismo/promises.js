/**
 * assincronismo
 * promises
 * @author Luís Antônio de Paula LIma
 */

const read = require('readline-sync')

//simulação do banco de dados usando uma estrutura de dados
const database = {
    admin: {
        usuario: 'Administrador',
        senha: 'password'
    },
    prof: {
        usuario: 'Jose de Assis',
        senha: '1234'
    },
    aluno: {
        usuario: 'Luis Antonio',
        senha: '12345'
    }
}

//Autenticação do usuario
console.clear()
console.log('----------------------------------------')
console.log(' USUÁRIO ')
console.log('----------------------------------------')

//entrada de dados (captura do login e senha)
let login = read.question('login: ')
let senha = read.question('senha: ')
console.log('----------------------------------------')
//executando uma função assincrona com uso de promise
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`Erro de autenticação. ${error}`)
    })

//Função logar (autenticação do usuário)
function logar(login, senha) {
    //uso de promise para trabalhar a requisição ao banco de dados de forma assincrona
    return new Promise((resolve, reject) => {
        //uso do setTimeout() para simular um atraso
        setTimeout(() => {
            //lógica para autenticar um usuário
            //O primeiro if verifica se existe o login
            if (database.hasOwnProperty(login)) {
                //O segundo if verifica se a senha está correta
                if (database[login].senha === senha) {
                    resolve(`Autenticação bem sucedida. Olá ${database[login].usuario}`)
                } else {
                    reject('Senha incorreta. Tente novamente.')
                }
            } else {
                reject('Usuáro não encontrado. Verifique o login.')
            }
        }, 2000)
    })
}