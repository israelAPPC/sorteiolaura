document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Grifnória', 'Sonserina', 'Corvinal', 'Lufa Lufa'];
    const casaEscolhida = casas[Math.floor(Math.random() * casas.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = casaEscolhida;

    // Voz da casa escolhida
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(casaEscolhida);
        utterance.lang = 'pt-BR';
        speechSynthesis.speak(utterance);
    } else {
        alert('Seu navegador não suporta síntese de voz.');
    }
});