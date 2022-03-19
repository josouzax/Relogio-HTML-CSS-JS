// TRÊS COISAS PARA FUNCIONAR UMA FUNC: UMA AÇÃO (onload, onmouseenter); UMA FUNÇÃO [function função()] E UMA ALTERAÇÃO (msg.innerHTML = 'ALTERAÇÃO'!


function carregar() {
    var horaAtual = new Date().getHours();
    var horario = document.getElementById('horario');
    var imagem = document.getElementById('imagem');
    var saudacao = document.getElementById('saudacao');

    horario.innerHTML = `Agora são: ${horaAtual}`;
    if (horaAtual > 0 && horaAtual < 12) {
        //BOM DIA
        imagem.src = 'imagens/ManhaPQN.png';
        saudacao.innerHTML = '<p>BOM DIA!</p>';
        document.body.style.background = '#fee785';
    } else if (horaAtual > 12 && horaAtual < 18) {
        // BOA TARDE
        imagem.src = 'imagens/TardePQN.png';
        saudacao.innerHTML = '<p>BOA TARDE!</p>';
        document.body.style.background = '#dc6613';
    } else {
        // BOA NOITE!
        imagem.src = 'imagens/NoitePQN.png';
        saudacao.innerHTML = '<p>BOA NOITE!</p>';
        document.body.style.background = '#1f4769';
    }
}