/**
 * assincronismo
 * fetch (promise simplificado)
 * @author
 */

const read = require ('readline-sync')
console.clear()
console.log('VIA CEP')
let cep = read.question('Digite o CEP: ')
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

//apoio ao entendimento da lógica
//console.log(urlAPI)

//uso de promise para recuperar os dados do WEB SERVICE (API)
fetch(urlAPI)
    .then((Response) => { //obter os dados
        return Response.json()
    })

    .then((dados) => { //manipular os dados
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })

    .catch((error) => {
    console.log(`Erro ao obter o endereço: ${error}`)
    })