let historico = [];
let contagemCasas = {
    'Grifnória': 0,
    'Sonserina': 0,
    'Corvinal': 0,
    'Lufa Lufa': 0
};

document.getElementById('sorteio-btn').addEventListener('click', function() {
    const casas = ['Grifnória', 'Sonserina', 'Corvinal', 'Lufa Lufa'];
    const audios = {
        'Grifnória': 'grifnoria.mp3',
        'Sonserina': 'sonserina.mp3',
        'Corvinal': 'corvinal.mp3',
        'Lufa Lufa': 'lufa.mp3'
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

    // Exibe o vídeo do chapéu seletor
    const video = document.getElementById('chapeu-video');
    video.style.display = 'block';
    video.play();

    // Aguarda o tempo do vídeo para exibir o resultado
    setTimeout(() => {
        video.style.display = 'none';

        const resultado = document.getElementById('resultado');
        resultado.textContent = casaEscolhida;

        const audio = new Audio(audios[casaEscolhida]);
        audio.play();

        // Remove o resultado após 10 segundos
        setTimeout(() => {
            resultado.textContent = '';
        }, 10000);
    }, 4000); // Tempo do vídeo do chapéu seletor
});
