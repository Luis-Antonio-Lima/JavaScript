/**
 * Exemplo de uso da biblioteca (pacote) jspdf
 * @author Luís Antônio de Paula Lima
 */

const {jsPDF} = require ('jspdf')
//gerar um documento pdf
const pdf = new jsPDF()
pdf.text('Olá PDF', 15, 15) //15, 15 (margem em px x/y)
pdf.save('teste.pdf') //nome do arquivo salvo no local