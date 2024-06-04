/**
 * Cartas Uno Atualizado
 * @author Luís Antônio de Paula Lima
 */

function sortearCarta(){
    //    
    let valorCarta = ["0","1","2","3","4","5","6","7","8","9","bloqueio"
    ,"inverte","cor","mais2","mais4"]

    let corCarta = ["red","yellow","green","blue"]
    //sorteio do índice dos vetores
    let tipoCarta = valorCarta[Math.floor(Math.random() * 15)] //(1 - 15)
    let Cor = corCarta[Math.floor(Math.random() * 4)] //(1 - 4)
    //console.log(`${face}${nipe}`)
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}-${Cor}.png">`
    //console.log(`${tipoCarta}${Cor}`)

}
