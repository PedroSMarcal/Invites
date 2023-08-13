document.addEventListener("DOMContentLoaded", () => {
    const balloonsContainer = document.querySelector(".balloons");

    const numBalloons = Math.floor(Math.random() * 6) + 5; // Generate between 5 and 10 balloons

    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        const size = Math.floor(Math.random() * 30) + 40; // Generate size between 40 and 70
        const duration = Math.floor(Math.random() * 3) + 2; // Generate duration between 2 and 5
        const color = getRandomColor(); // Generate random color
        balloon.style.setProperty("--size", `${size}px`);
        balloon.style.setProperty("--duration", `${duration}s`);
        balloon.style.setProperty("--color", color);
        balloon.style.left = `${Math.random() * 100}%`; // Random horizontal position
        balloonsContainer.appendChild(balloon);
    }
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}