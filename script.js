// Selecionar os elementos do HTML
const botaoStatus = document.getElementById('btn-status');
const painelResultado = document.getElementById('resultado-status');

// Adicionar o evento de clique no botão
botaoStatus.addEventListener('click', () => {
    
    // Mudar temporariamente o texto para dar efeito de carregamento
    painelResultado.textContent = "A ler sensores IoT da plantação...";
    painelResultado.style.color = "#00E676";

    // Simular uma resposta após 1.5 segundos
    setTimeout(() => {
        painelResultado.innerHTML = `
            <strong>STATUS DA QUINTA TECH:</strong><br>
            - Humidade do Solo: 68% (Ideal)<br>
            - Economia de Água: +24%<br>
            - Energia Solar Ativa: 100%
        `;
        painelResultado.style.color = "#FFFFFF";
    }, 1500);
});