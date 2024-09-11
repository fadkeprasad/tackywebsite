// Function to generate falling items (coins or flowers)
function createShower(containerId, imageUrl, count) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous items

    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.src = imageUrl;
        item.classList.add(containerId === 'coin-shower' ? 'coin' : 'flower');
        item.style.left = Math.random() * window.innerWidth + 'px';
        item.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Random duration between 2s and 4s
        container.appendChild(item);
    }
}

// Event listener for the "Honor with Gold" button
document.getElementById('honor-gold').addEventListener('click', () => {
    createShower('coin-shower', 'gold.png', 50); // Replace with your actual coin image
});

// Event listener for the "Honor with Flowers" button
document.getElementById('honor-flowers').addEventListener('click', () => {
    createShower('flower-shower', 'flower1.png', 50); // Replace with your actual flower image
});


