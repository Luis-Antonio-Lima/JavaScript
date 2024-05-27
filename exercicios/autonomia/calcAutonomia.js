const capacidade = document.getElementById('capacidade'); /* Obtém o campo de entrada da distância */
const combustivel = document.getElementById('combustivel'); /* Obtém o campo de entrada do combustível */
const calcular = document.getElementById('calcular'); /* Obtém o botão Calcular */
const limpar = document.getElementById('limpar'); /* Obtém o botão Limpar */
const resultado = document.getElementById('resultado'); /* Obtém o parágrafo do resultado */

calcular.addEventListener('click', function() { /* Adiciona um ouvinte de evento de clique ao botão Calcular */
    const autonomia = capacidade.value * combustivel.value; /* Calcula a autonomia */
    resultado.textContent = `A autonomia do veiculo é de: ${autonomia} KMs` /* Exibe o resultado no parágrafo */
});

limpar.addEventListener('click', function() { /* Adiciona um ouvinte de evento de clique ao botão Limpar */
    capacidade.value = ''; /* Limpa o campo de entrada da distância */
    combustivel.value = ''; /* Limpa o campo de entrada do combustível */
    resultado.textContent = ''; /* Limpa o parágrafo do resultado */
});