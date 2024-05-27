document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Grifnória', 'Sonserina', 'Corvinal', 'Lufa Lufa'];
    const audios = {
        'Grifnória': 'Grifnoria.mp3',
        'Sonserina': 'Sonserina.mp3',
        'Corvinal': 'Corvinal.mp3',
        'Lufa Lufa': 'Lufa.mp3'
    };

    const casaEscolhida = casas[Math.floor(Math.random() * casas.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = casaEscolhida;

    const audio = new Audio(audios[casaEscolhida]);
    audio.play();
});