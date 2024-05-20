/**
 * Sistema PDV
 * @author Luís Antônio de Paula Lima
 */

//variáveis
let valor, desconto, troco, valorPago, rs, rs2

function calcular() {
    //entrada
    valor = Number(frmPdv.txtTotal.value)
    desconto = Number(frmPdv.txtPorcentagem.value)

    //processamento
    if (desconto >= 1) {
        rs = (valor * desconto) / 100
        frmPdv.txtDesconto.value = `R$ ${rs.toFixed(0)}` //saida
        rs2 = valor - rs
        frmPdv.txtTotalDesconto.value = `R$ ${rs2.toFixed(2)}` //saida
    } else {
        frmPdv.txtTotalDesconto.value = `R$ ${valor.toFixed(2)}` //saida
        frmPdv.txtDesconto.value = `R$ ${desconto.toFixed(0)}` //saida
        rs2 = valor
    }

}

function Calctroco() {
    //processamento
    valorPago = Number(frmPdv.txtValorPago.value)

    troco = valorPago - rs2
    frmPdv.txtTroco.value = `R$ ${troco.toFixed(2)}` //saida
}