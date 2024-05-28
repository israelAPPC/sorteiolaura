let historico = [];

document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Grifnória', 'Sonserina', 'Corvinal', 'Lufa Lufa'];
    const audios = {
        'Grifnória': 'Grifnoria.mp3',
        'Sonserina': 'Sonserina.mp3',
        'Corvinal': 'Corvinal.mp3',
        'Lufa Lufa': 'Lufa.mp3'
    };

    let casaEscolhida;

    // Garante que a mesma casa não seja escolhida nos próximos dois sorteios
    do {
        casaEscolhida = casas[Math.floor(Math.random() * casas.length)];
    } while (historico.includes(casaEscolhida));

    historico.push(casaEscolhida);
    if (historico.length > 2) {
        historico.shift(); // Mantém apenas os últimos 2 sorteios no histórico
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = casaEscolhida;

    const audio = new Audio(audios[casaEscolhida]);
    audio.play();
});


