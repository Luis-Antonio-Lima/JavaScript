/**
 * JS - Simulador de operadores lógicos
 * @author Luís Antônio de Paula Lima
 */

//valor recebido
// 1 acender lâmpada
// 2 apagar lâmpada
// 3 quebrar lâmpada
// 4 sw1 (and)
// 5 sw2 (and)
// 6 sw3 (or)
// 7 sw4 (or)
// 8 sw5 (not)
let valor

//estado da lâmpada
let quebrada = false

//chaves
let sw1 = false
let sw2 = false
let sw3 = false
let sw4 = false
let sw5 = true

let path = window.location.pathname

function simular(valor) {
    // AND

    if (valor === 4 && sw1 === false && path === "/exercicios/simulador/and.html") {
        document.getElementById('sw1').src="./img/swon.png"
        sw1 = true
    } else if (valor === 4 && sw1 === true) {
        document.getElementById('sw1').src="./img/swoff.png"
        sw1 = false
    } else if (valor === 5 && sw2 === false) {
        document.getElementById('sw2').src="./img/swon.png"
        sw2 = true
    } else if (valor === 5 && sw2 === true) {
        document.getElementById('sw2').src="./img/swoff.png"
        sw2 = false
    } else if (valor === 6 && sw3 === false && path === "/exercicios/simulador/or.html") {
        document.getElementById('sw3').src="./img/swon.png"
        sw3 = true
    } else if (valor === 6 && sw3 === true) {
        document.getElementById('sw3').src="./img/swoff.png"
        sw3 = false
    } else if (valor === 7 && sw4 === false) {
        document.getElementById('sw4').src="./img/swon.png"
        sw4 = true
    } else if (valor === 7 && sw4 === true) {
        document.getElementById('sw4').src="./img/swoff.png"
        sw4 = false
    } else if (valor === 8 && sw5 === false && path === "/exercicios/simulador/not.html") {
        document.getElementById('sw5').src="./img/swoff.png"
        sw5 = true
    } else if (valor === 8 && sw5 === true) {
        document.getElementById('sw5').src="./img/swon.png"
        sw5 = false
    }

    if (quebrada === false && path === "/exercicios/simulador/and.html") {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lampada').src="./img/on.jpg"
        } else {
            document.getElementById('lampada').src="./img/off.jpg"
        }
    }

    if (quebrada === false && path === "/exercicios/simulador/or.html") {
        if (sw3 === true || sw4 === true) {
            document.getElementById('lampada').src="./img/on.jpg"
        } else {
            document.getElementById('lampada').src="./img/off.jpg"
        }
    }

    if (quebrada === false && path === "/exercicios/simulador/not.html") {
        if (!sw5) {
            document.getElementById('lampada').src="./img/off.jpg"
        } else {
            document.getElementById('lampada').src="./img/on.jpg"
        }
    }

    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById('lampada').src="./img/broken.jpg"
        quebrada = true
    }
}