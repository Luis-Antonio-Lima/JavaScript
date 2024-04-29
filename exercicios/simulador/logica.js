/**
 * JS - Simulador de operadores lógicos
 * @author Luís Antônio de Paula Lima
 */

//valor recebido
// 1 acender lâmpada
// 2 apagar lâmpada
// 3 quebrar lâmpada
let valor

//estado da lâmpada
let quebrada = false

function simular(valor) {
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById('lamp').src = "./img/broken.jpg"
    }
}