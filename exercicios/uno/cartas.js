/**
 * Cartas Uno
 * @author Luís Antônio de Paula Lima
 * @author Lucas Santos da Silva
 */

function sortearCarta(){
    //    
    let valorCarta = ["0","1","2","3","4","5","6","7","8","9","10"
    ,"11","12","13","14","15","16","17","18","19","20","21","22"
    ,"23","24","25","26","27","28","29","30","31","32","33","34"
    ,"35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53"]
    //sorteio do índice dos vetores
    let tipoCarta = valorCarta[Math.floor(Math.random() * 54)] //(1 - 53)
    //console.log(`${face}${nipe}`)
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`
}
