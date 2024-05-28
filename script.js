let historico = [];
let contagemCasas = {
    'Grifnória': 0,
    'Sonserina': 0,
    'Corvinal': 0,
    'Lufa Lufa': 0
};

document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Gifnória', 'Sonseria', 'Corvinal', 'Lufa Lufa'];
    const audios = {
        'Grifnória': 'Grfnoria.mp3',
        'Sonserina': 'Sonserina.mp3',
        'Corvinal': 'Corvinal.mp3',
        'Lufa Lufa': 'Lufa.mp3'
    };

    // Filtra casas que já atingiram o limite de 20 sorteios
    const casasDisponiveis = casas.filter(casa => contagemCasas[casa] < 20);

    if (casasDisponiveis.length === 0) {
        alert("Todas as casas já foram sorteadas 20 vezes!");
        return;
    }

    let casaEscolhida;

    // Garante que a mesma casa não seja escolhida nos próximos dois sorteios
    do {
        casaEscolhida = casasDisponiveis[Math.floor(Math.random() * casasDisponiveis.length)];
    } while (historico.includes(casaEscolhida));

    historico.push(casaEscolhida);
    if (historico.length > 2) {
        historico.shift(); // Mantém apenas os últimos 2 sorteios no histórico
    }

    // Incrementa a contagem da casa escolhida
    contagemCasas[casaEscolhida]++;

    const resultado = document.getElementById('resultado');
    resultado.textContent = casaEscolhida;

    const audio = new Audio(audios[casaEscolhida]);
    audio.play();
});
