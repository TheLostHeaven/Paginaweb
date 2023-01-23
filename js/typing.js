let text = "Bienvenidos a mi pagina web";
let i = 0;
let typingText = document.getElementById("typing-text");

function typeWriter() {
if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
}
}

typeWriter();
