function sortearCarta() {

    let valorCarta = ["0-red","0-blue","0-green","0-yellow","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]

    // Se a última cor for definida, filtre as cores disponíveis para corresponder à última cor
/*
    if (ultimoTipo) {
        valorCarta = valorCarta.filter(valor => valor === ultimoTipo)
    } else if (ultimaCor) {
        corCarta = corCarta.filter(cor => cor === ultimaCor)
    }
*/
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    //let Cor = corCarta[Math.floor(Math.random() * corCarta.length)]
 /*
    // Atualize a última cor sorteada
    ultimoTipo = tipoCarta
    ultimaCor = Cor
*/

    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    console.log(`${tipoCarta}`)

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }

}

function zerored() {
    valorCarta = ["0-red","0-blue","0-green","0-yellow","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function zeroblue() {
    valorCarta = ["0-red","0-blue","0-green","0-yellow","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function zerogreen() {
    valorCarta = ["0-red","0-blue","0-green","0-yellow","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function zeroyellow() {
    valorCarta = ["0-red","0-blue","0-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function onered() {
    valorCarta = ["0-red","1-blue","1-green","1-yellow","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function oneblue() {
    valorCarta = ["1-red","0-blue","1-green","1-yellow","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function onegreen() {
    valorCarta = ["1-red","1-blue","0-green","1-yellow","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function oneyellow() {
    valorCarta = ["1-red","1-blue","1-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function twored() {
    valorCarta = ["2-red","2-blue","2-green","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function twoblue() {
    valorCarta = ["2-red","2-yellow","2-green","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function twogreen() {
    valorCarta = ["2-red","2-yellow","2-blue","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function twoyellow() {
    valorCarta = ["2-red","2-green","2-blue","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function threered() {
    valorCarta = ["3-yellow","3-green","3-blue","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function threeblue() {
    valorCarta = ["3-yellow","3-green","3-red","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function threegreen() {
    valorCarta = ["3-yellow","3-blue","3-red","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function threeyellow() {
    valorCarta = ["3-green","3-blue","3-red","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fourred() {
    valorCarta = ["4-green","4-blue","4-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fourblue() {
    valorCarta = ["4-green","4-red","4-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fourgreen() {
    valorCarta = ["4-red","4-blue","4-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fouryellow() {
    valorCarta = ["4-red","4-blue","4-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fivered() {
    valorCarta = ["5-green","5-blue","5-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fiveblue() {
    valorCarta = ["5-green","5-red","5-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fivegreen() {
    valorCarta = ["5-red","5-blue","5-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function fiveyellow() {
    valorCarta = ["5-red","5-blue","5-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sixred() {
    valorCarta = ["6-green","6-blue","6-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sixblue() {
    valorCarta = ["6-green","6-red","6-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sixgreen() {
    valorCarta = ["6-red","6-blue","6-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sixyellow() {
    valorCarta = ["6-red","6-blue","6-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sevenred() {
    valorCarta = ["7-green","7-blue","7-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sevenblue() {
    valorCarta = ["7-green","7-red","7-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sevengreen() {
    valorCarta = ["7-red","7-blue","7-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function sevenyellow() {
    valorCarta = ["7-red","7-blue","7-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function eightred() {
    valorCarta = ["8-green","8-blue","8-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function eightblue() {
    valorCarta = ["8-green","8-red","8-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function eightgreen() {
    valorCarta = ["8-red","8-blue","8-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function eightyellow() {
    valorCarta = ["8-red","8-blue","8-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function ninered() {
    valorCarta = ["9-green","9-blue","9-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function nineblue() {
    valorCarta = ["9-green","9-red","9-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function ninegreen() {
    valorCarta = ["9-red","9-blue","9-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function nineyellow() {
    valorCarta = ["9-red","9-blue","9-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function bloqueiored() {
    valorCarta = ["bloqueio-green","bloqueio-blue","bloqueio-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function bloqueioblue() {
    valorCarta = ["bloqueio-green","bloqueio-red","bloqueio-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function bloqueiogreen() {
    valorCarta = ["bloqueio-red","bloqueio-blue","bloqueio-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function bloqueioyellow() {
    valorCarta = ["bloqueio-red","bloqueio-blue","bloqueio-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function invertered() {
    valorCarta = ["inverte-green","inverte-blue","inverte-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function inverteblue() {
    valorCarta = ["inverte-green","inverte-red","inverte-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function invertegreen() {
    valorCarta = ["inverte-red","inverte-blue","inverte-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function inverteyellow() {
    valorCarta = ["inverte-red","inverte-blue","inverte-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function corred() {
    valorCarta = ["cor-green","cor-blue","cor-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function corblue() {
    valorCarta = ["cor-green","cor-red","cor-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function corgreen() {
    valorCarta = ["cor-red","cor-blue","cor-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function coryellow() {
    valorCarta = ["cor-red","cor-blue","cor-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function moretwored() {
    valorCarta = ["mais2-green","mais2-blue","mais2-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function moretwoblue() {
    valorCarta = ["mais2-green","mais2-red","mais2-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function moretwogreen() {
    valorCarta = ["mais2-red","mais2-blue","mais2-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function moretwoyellow() {
    valorCarta = ["mais2-red","mais2-blue","mais2-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function morefourred() {
    valorCarta = ["mais4-green","mais4-blue","mais4-yellow","0-red","1-red","2-red","3-red","4-red","5-red","6-red","7-red","8-red","9-red","bloqueio-red", "inverte-red", "cor-red", "mais2-red", "mais4-red"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function morefourblue() {
    valorCarta = ["mais4-green","mais4-red","mais4-yellow","0-blue","1-blue","2-blue","3-blue","4-blue","5-blue","6-blue","7-blue","8-blue","9-blue","bloqueio-blue", "inverte-blue", "cor-blue", "mais2-blue", "mais4-blue"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}

function morefourgreen() {
    valorCarta = ["mais4-red","mais4-blue","mais4-yellow","0-green","1-green","2-green","3-green","4-green","5-green","6-green","7-green","8-green","9-green","bloqueio-green", "inverte-green", "cor-green", "mais2-green", "mais4-green"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-yellow") {
        let morefourYellow = document.getElementById('switch')
        morefourYellow.innerHTML = `<button onclick = ${"morefouryellow()  "}>Jogar Uma Carta</button>`
    }
}

function morefouryellow() {
    valorCarta = ["mais4-red","mais4-blue","mais4-green","0-yellow","1-yellow","2-yellow","3-yellow","4-yellow","5-yellow","6-yellow","7-yellow","8-yellow","9-yellow","bloqueio-yellow", "inverte-yellow", "cor-yellow", "mais2-yellow", "mais4-yellow"]
    let tipoCarta = valorCarta[Math.floor(Math.random() * valorCarta.length)]
    let centroCarta = document.getElementById('centro')
    centroCarta.innerHTML = `<img src="./img/${tipoCarta}.png">`

    if (tipoCarta == "0-red") {
        let zeroRed = document.getElementById('switch')
        zeroRed.innerHTML = `<button onclick = ${"zerored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-blue") {
        let zeroBlue = document.getElementById('switch')
        zeroBlue.innerHTML = `<button onclick = ${"zeroblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-green") {
        let zeroGreen = document.getElementById('switch')
        zeroGreen.innerHTML = `<button onclick = ${"zerogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "0-yellow") {
        let zeroYellow = document.getElementById('switch')
        zeroYellow.innerHTML = `<button onclick = ${"zeroyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-red") {
        let oneRed = document.getElementById('switch')
        oneRed.innerHTML = `<button onclick = ${"onered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-green") {
        let oneGreen = document.getElementById('switch')
        oneGreen.innerHTML = `<button onclick = ${"onegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-yellow") {
        let oneYellow = document.getElementById('switch')
        oneYellow.innerHTML = `<button onclick = ${"oneyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "1-blue") {
        let oneBlue = document.getElementById('switch')
        oneBlue.innerHTML = `<button onclick = ${"oneblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-red") {
        let twoRed = document.getElementById('switch')
        twoRed.innerHTML = `<button onclick = ${"twored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-yellow") {
        let twoYellow = document.getElementById('switch')
        twoYellow.innerHTML = `<button onclick = ${"twoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-blue") {
        let twoBlue = document.getElementById('switch')
        twoBlue.innerHTML = `<button onclick = ${"twoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "2-green") {
        let twoGreen = document.getElementById('switch')
        twoGreen.innerHTML = `<button onclick = ${"twogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-red") {
        let threeRed = document.getElementById('switch')
        threeRed.innerHTML = `<button onclick = ${"threered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-green") {
        let threeGreen = document.getElementById('switch')
        threeGreen.innerHTML = `<button onclick = ${"threegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-blue") {
        let threeBlue = document.getElementById('switch')
        threeBlue.innerHTML = `<button onclick = ${"threeblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "3-yellow") {
        let threeYellow = document.getElementById('switch')
        threeYellow.innerHTML = `<button onclick = ${"threeyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-red") {
        let fourRed = document.getElementById('switch')
        fourRed.innerHTML = `<button onclick = ${"fourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-blue") {
        let fourBlue = document.getElementById('switch')
        fourBlue.innerHTML = `<button onclick = ${"fourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-yellow") {
        let fourYellow = document.getElementById('switch')
        fourYellow.innerHTML = `<button onclick = ${"fouryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "4-green") {
        let fourGreen = document.getElementById('switch')
        fourGreen.innerHTML = `<button onclick = ${"fourgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-red") {
        let fiveRed = document.getElementById('switch')
        fiveRed.innerHTML = `<button onclick = ${"fivered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-blue") {
        let fiveBlue = document.getElementById('switch')
        fiveBlue.innerHTML = `<button onclick = ${"fiveblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-yellow") {
        let fiveYellow = document.getElementById('switch')
        fiveYellow.innerHTML = `<button onclick = ${"fiveyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "5-green") {
        let fiveGreen = document.getElementById('switch')
        fiveGreen.innerHTML = `<button onclick = ${"fivegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-red") {
        let sixRed = document.getElementById('switch')
        sixRed.innerHTML = `<button onclick = ${"sixred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-blue") {
        let sixBlue = document.getElementById('switch')
        sixBlue.innerHTML = `<button onclick = ${"sixblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-yellow") {
        let sixYellow = document.getElementById('switch')
        sixYellow.innerHTML = `<button onclick = ${"sixyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "6-green") {
        let sixGreen = document.getElementById('switch')
        sixGreen.innerHTML = `<button onclick = ${"sixgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-red") {
        let sevenRed = document.getElementById('switch')
        sevenRed.innerHTML = `<button onclick = ${"sevenred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-blue") {
        let sevenBlue = document.getElementById('switch')
        sevenBlue.innerHTML = `<button onclick = ${"sevenblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-yellow") {
        let sevenYellow = document.getElementById('switch')
        sevenYellow.innerHTML = `<button onclick = ${"sevenyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "7-green") {
        let sevenGreen = document.getElementById('switch')
        sevenGreen.innerHTML = `<button onclick = ${"sevengreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-red") {
        let eightRed = document.getElementById('switch')
        eightRed.innerHTML = `<button onclick = ${"eightred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-blue") {
        let eightBlue = document.getElementById('switch')
        eightBlue.innerHTML = `<button onclick = ${"eightblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-yellow") {
        let eightYellow = document.getElementById('switch')
        eightYellow.innerHTML = `<button onclick = ${"eightyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "8-green") {
        let eightGreen = document.getElementById('switch')
        eightGreen.innerHTML = `<button onclick = ${"eightgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-red") {
        let nineRed = document.getElementById('switch')
        nineRed.innerHTML = `<button onclick = ${"ninered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-blue") {
        let nineBlue = document.getElementById('switch')
        nineBlue.innerHTML = `<button onclick = ${"nineblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-yellow") {
        let nineYellow = document.getElementById('switch')
        nineYellow.innerHTML = `<button onclick = ${"nineyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "9-green") {
        let nineGreen = document.getElementById('switch')
        nineGreen.innerHTML = `<button onclick = ${"ninegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-red") {
        let bloqueioRed = document.getElementById('switch')
        bloqueioRed.innerHTML = `<button onclick = ${"bloqueiored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-blue") {
        let bloqueioBlue = document.getElementById('switch')
        bloqueioBlue.innerHTML = `<button onclick = ${"bloqueioblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-yellow") {
        let bloqueioYellow = document.getElementById('switch')
        bloqueioYellow.innerHTML = `<button onclick = ${"bloqueioyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "bloqueio-green") {
        let bloqueioGreen = document.getElementById('switch')
        bloqueioGreen.innerHTML = `<button onclick = ${"bloqueiogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-red") {
        let inverteRed = document.getElementById('switch')
        inverteRed.innerHTML = `<button onclick = ${"invertered()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-blue") {
        let inverteBlue = document.getElementById('switch')
        inverteBlue.innerHTML = `<button onclick = ${"inverteblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-yellow") {
        let inverteYellow = document.getElementById('switch')
        inverteYellow.innerHTML = `<button onclick = ${"inverteyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "inverte-green") {
        let inverteGreen = document.getElementById('switch')
        inverteGreen.innerHTML = `<button onclick = ${"invertegreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-red") {
        let corRed = document.getElementById('switch')
        corRed.innerHTML = `<button onclick = ${"corred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-blue") {
        let corBlue = document.getElementById('switch')
        corBlue.innerHTML = `<button onclick = ${"corblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-yellow") {
        let corYellow = document.getElementById('switch')
        corYellow.innerHTML = `<button onclick = ${"coryellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "cor-green") {
        let corGreen = document.getElementById('switch')
        corGreen.innerHTML = `<button onclick = ${"corgreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-red") {
        let moretwoRed = document.getElementById('switch')
        moretwoRed.innerHTML = `<button onclick = ${"moretwored()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-blue") {
        let moretwoBlue = document.getElementById('switch')
        moretwoBlue.innerHTML = `<button onclick = ${"moretwoblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-yellow") {
        let moretwoYellow = document.getElementById('switch')
        moretwoYellow.innerHTML = `<button onclick = ${"moretwoyellow()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais2-green") {
        let moretwoGreen = document.getElementById('switch')
        moretwoGreen.innerHTML = `<button onclick = ${"moretwogreen()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-red") {
        let morefourRed = document.getElementById('switch')
        morefourRed.innerHTML = `<button onclick = ${"morefourred()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-blue") {
        let morefourBlue = document.getElementById('switch')
        morefourBlue.innerHTML = `<button onclick = ${"morefourblue()  "}>Jogar Uma Carta</button>`
    } else if (tipoCarta == "mais4-green") {
        let morefourGreen = document.getElementById('switch')
        morefourGreen.innerHTML = `<button onclick = ${"morefourgreen()  "}>Jogar Uma Carta</button>`
    }
}