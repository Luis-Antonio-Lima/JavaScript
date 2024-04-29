/**
 * APP Flex
 * @author Luís Antônio de Paula Lima
 */

let etanol, gasolina

function calcular() {
    etanol = Number(frmFlex.txtEtanol.value)
    gasolina = Number(frmFlex.txtGasolina.value)
    //console.log(etanol)
    //console.log(gasolina)

    if (gasolina == "" || etanol == ""){
        alert("Você precisa escrever um valor")
        document.getElementById('status').src = "./img/flex.png"
        if (gasolina =="") {
            frmFlex.txtGasolina.focus()
        } else {
            frmFlex.txtEtanol.focus()
        }
        
    } else if (etanol < 0.7 * gasolina) {
        //etanol
        console.log("Etanol é melhor")
        document.getElementById('status').src = "./img/etanol.png"
    } else {
        //gasolina
        console.log("Gasolina é melhor")
        document.getElementById('status').src = "./img/gasolina.png"
    }
}

function limpar() {
    document.getElementById('status').src = "./img/flex.png"
}