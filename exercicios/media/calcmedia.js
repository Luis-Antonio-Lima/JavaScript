/**
 * Calculadora da média das notas
 * @author Luís Antônio de Paula Lima
 */

let primeiro, segundo, terceiro, quarto

function calcular() {
    primeiro = Number(frmFlex.txt1semestre.value)
    segundo = Number(frmFlex.txt2semestre.value)
    terceiro = Number(frmFlex.txt3semestre.value)
    quarto = Number(frmFlex.txt4semestre.value)

    media = (primeiro + segundo + terceiro + quarto) / 4

    frmFlex.txtMedia.value = media.toFixed(2)

    if (media >= 7) {
        frmFlex.txtResultado.value = "APROVADO"
    } else if (media < 4) {
        frmFlex.txtResultado.value = "REPROVADO"
    } else  {
        frmFlex.txtResultado.value = "RECUPERAÇÃO"
    }
}

function limpar() {
}