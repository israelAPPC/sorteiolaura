document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Gifnória', 'Sonseria', 'Corvinal', 'Lufa Lufa'];
    const casaEscolhida = casas[Math.floor(Math.random() * casas.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = casaEscolhida;

    // Voz da casa escolhida (parecida com o Chapéu Seletor)
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(casaEscolhida);
        utterance.lang = 'pt-BR';

        // Configurações para tentar deixar a voz semelhante ao Chapéu Seletor
        utterance.pitch = 0.5; // Tom baixo
        utterance.rate = 0.8;  // Velocidade moderada

        speechSynthesis.speak(utterance);
    } else {
        alert('Seu navegador não suporta síntese de voz.');
    }
});