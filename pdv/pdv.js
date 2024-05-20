/**
 * Sistema PDV
 * @author Luís Antônio de Paula Lima
 */

let valor, desconto, troco, valorDesconto, valorPago, rs, rs2

function calcular() {

    valor = Number(frmPdv.txtTotal.value)
    desconto = Number(frmPdv.txtPorcentagem.value)

    if (desconto >= 1) {
        rs = (valor * desconto) / 100
        frmPdv.txtDesconto.value = rs.toFixed(0)
        rs2 = valor - rs
        frmPdv.txtTotalDesconto.value = rs2.toFixed(2)
    } else {
        frmPdv.txtTotalDesconto.value = valor.toFixed(2)
        frmPdv.txtDesconto.value = desconto.toFixed(0)
        rs2 = valor
    }

}

function Calctroco() {
    valorPago = Number(frmPdv.txtValorPago.value)

    troco = valorPago - rs2
    frmPdv.txtTroco.value = troco.toFixed(2)
}

function limpar() {}