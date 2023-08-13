// Função para criar um fogo de artifício
function createFirework() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.backgroundColor = randomColor;

    // Atribua posições aleatórias ao fogo de artifício
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    firework.style.left = `${randomX}px`;
    firework.style.top = `${randomY}px`;

    return firework;
}

// Função para iniciar o efeito dos fogos de artifício
function startFireworks() {
    const container = document.querySelector('.fireworks-container');
    container.innerHTML = '';

    // Crie vários fogos de artifício e adicione-os ao contêiner
    for (let i = 0; i < 30; i++) {
        const firework = createFirework();
        container.appendChild(firework);
    }
}

// Inicie o efeito dos fogos de artifício quando a página for carregada
window.addEventListener('load', startFireworks);
window.addEventListener('resize', startFireworks);
