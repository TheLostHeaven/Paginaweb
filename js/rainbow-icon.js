const rainbowIcon = document.getElementById ("rainbow-icon");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let currentColorIndex = 0;

setInterval(() => {
    rainbowText.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 1000);