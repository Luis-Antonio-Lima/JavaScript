/**
 * Sorteio de uma carta
 * Exemplo de uso do array para simplificar o código
 * @author Luís Antônio de Paula Lima
 */

function sortearCarta() {

    //           [0]   [1]   [2]   [3] 
    let nipes = ['♦' , '♥' , '♠' , '♣']
    //           [0]   [1]   [2]   [3]   [4]   [5]   [6]   [7]   [8]    [9]   [10]  [11]  [12]
    let faces = ['A' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10' , 'J' , 'Q' , 'K']

    //sorteio do indice dos vetores
    let nipe = nipes[Math.floor(Math.random() * 4)] //(0 - 3)
    let face = faces[Math.floor(Math.random() * 13)] //(0 - 12)

    //console.log(`${face}${nipe}`)

    // Determinar a cor com base no nipe sorteado antes de exibir a carta
    let cor
    if (nipe === '♥' || nipe === '♦') {
        cor = '#ff0000' //vermelho
    } else {
        cor = '#000000' //preto
    }

    // Renderizar (desenhar, exibir, "dar vida") a carta

    document.getElementById('supEsq').innerHTML = `<div>${face}</div><div>${nipe}</div>`
    document.getElementById('centro').innerHTML = `<div>${nipe}</div>`
    document.getElementById('infDir').innerHTML = `<div>${face}</div><div>${nipe}</div>`

    // Adicionando imagens caso apareça K,Q e J
    if (face === 'K') {
        document.getElementById('centro').innerHTML = `<img src="./img/rei.png">`
    } else if (face === 'Q') {
        document.getElementById('centro').innerHTML = `<img src="./img/dama.png">`
    } else if (face === 'J') {
        document.getElementById('centro').innerHTML = `<img src="./img/valete.png">`
    }

    // Aplicar a cor
    document.getElementById('supEsq').style.color = cor /* Adicionar CSS */
    document.getElementById('centro').style.color = cor /* Adicionar CSS */
    document.getElementById('infDir').style.color = cor /* Adicionar CSS */
}
