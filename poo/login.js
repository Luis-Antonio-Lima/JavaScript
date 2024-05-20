/**
 * Fundamentos da POO
 * Encapsulamento
 * @author Luís Antônio de Paula Lima
 */

class User {
    //atributos
    constructor(login, senha) {
        this.login = login
        //encapsulamento
        let _senha = senha
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }

    //ações(métodos)
    logar() {
        console.log ('_______________________')
        console.log (`Usuário: ${this.login}`)
        console.log (`Senha: ${this.getSenha()}`)

        if (this.login === "admin" && this.getSenha() === "123456") {
            console.log ('Usuário autenticado')
        } else {
            console.log ('Usuário e/ou senha inválido(s)')
        }
    }
}

//sistema
console.clear()
const user1 = new User('admin','123')
user1.logar()

//usando o método set para setar uma nova senha (encapsulamento)
user1.setSenha('123456')
user1.logar()