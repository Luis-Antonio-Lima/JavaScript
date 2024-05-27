function toggleHipInput() {
    let gender = document.getElementById('gender').value
    let hipInput = document.getElementById('hip')
    let hipLabel = document.getElementById('hipLabel')
    if (gender === 'male') {
        hipInput.style.display = 'none'
        hipLabel.style.display = 'none'
    } else {
        hipInput.style.display = 'inline'
        hipLabel.style.display = 'inline'
    }
}

function calculateBodyFat() {
    let gender = document.getElementById('gender').value
    let age = document.getElementById('age').value
    let height = document.getElementById('height').value
    let neck = document.getElementById('neck').value
    let waist = document.getElementById('waist').value
    let hip = document.getElementById('hip').value

    let bodyFat
    if (gender === 'male') {
        bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
    } else {
        bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387
    }

    document.getElementById('result').innerText = 'Porcentagem de Gordura Corporal: ' + bodyFat.toFixed(2) + '%'
}

function clearForm() {
    document.getElementById('bodyFatForm').reset()
    document.getElementById('result').innerText = ''
}

window.onload = function() {
    toggleHipInput()
};