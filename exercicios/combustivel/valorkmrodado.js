/**
 * Calcular quanto é gasto por km a cada litro de combustivel
 * @author Luís Antônio de Paula Lima
 */

let valor, kilometragem

function calcular() {
    valor = Number(frmFlex.txtCombustivel.value)
    kilometragem = Number(frmFlex.txtKm.value)

    media = valor / kilometragem

    frmFlex.txtResultado.value = media.toFixed(2)
}

function limpar() {
}