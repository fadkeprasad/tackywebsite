// Fireworks explosion effect
document.addEventListener('DOMContentLoaded', () => {
    const fireworks = document.querySelector('.fireworks');
    let explosionCount = 0;

    setInterval(() => {
        explosionCount++;
        const firework = document.createElement('div');
        firework.classList.add('fireworks');
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';
        firework.style.animationDelay = (Math.random() * 2) + 's';

        document.body.appendChild(firework);

        // Remove fireworks after a short delay to avoid too many elements on screen
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }, 1000);
});
