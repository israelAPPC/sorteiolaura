document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Grifnória', 'Sonserina', 'Corvinal', 'Lufa Lufa'];
    const audios = {
        'Grifnória': 'Grifnoria.mp3',
        'Sonserina': 'Sonserina.mp3',
        'Corvinal': 'Corvinal.mp3',
        'Lufa Lufa': 'Lufa.mp3'
    };
   // Garante que a mesma casa não seja escolhida três vezes seguidas
    do {
        casaEscolhida = casas[Math.floor(Math.random() * casas.length)];
    } while (historico.length >= 2 && casaEscolhida === historico[historico.length - 1] && casaEscolhida === historico[historico.length - 2]);

    historico.push(casaEscolhida);
    if (historico.length > 3) {
        historico.shift(); // Mantém apenas os últimos 3 sorteios no histórico
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = casaEscolhida;

    const audio = new Audio(audios[casaEscolhida]);
    audio.play();
});