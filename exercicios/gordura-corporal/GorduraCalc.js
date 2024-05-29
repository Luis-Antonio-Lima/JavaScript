function calcularMasc() {
    let age = document.getElementById('age').value
    let height = document.getElementById('height').value
    let neck = document.getElementById('neck').value
    let waist = document.getElementById('waist').value

    let bodyFat

    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450

    document.getElementById('result').innerText = 'Porcentagem de Gordura Corporal: ' + bodyFat.toFixed(2) + '%'
}

function calcularFemi() {
    let age1 = document.getElementById('age1').value
    let height1 = document.getElementById('height1').value
    let neck1 = document.getElementById('neck1').value
    let waist1 = document.getElementById('waist1').value
    let hip1 = document.getElementById('hip1').value

    let bodyFat
    //bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist1 + hip1 - neck1) + 0.22100 * Math.log10(height1)) - 450
    //bodyFat = 163.205 * Math.log10(waist1 + hip1 - neck1) - 97.684 * (Math.log10(height1)) - 104.912
    bodyFat = Math.round ((163.205 * (Math.log (waist1 * 1 + hip1 * 1 - neck1 * 1) / Math.log(10)) - 97.684 * (Math.log (height1) /Math.log(10)) - 104.912 *1 ) * 100) / 100


    document.getElementById('result1').innerText = 'Porcentagem de Gordura Corporal: ' + bodyFat.toFixed(2) + '%'
}

function clearForm() {
    document.getElementById('bodyFatForm').reset()
    document.getElementById('result').innerText = ''
    document.getElementById('result1').innerText = ''
}