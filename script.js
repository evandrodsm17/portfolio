const textElement = document.getElementById("typed-text");
const phrases = ["Analista de Sistemas", "Programador Web", "Apaixonado por Código 💙"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[index];
  const visibleText = currentPhrase.substring(0, charIndex);
  textElement.textContent = visibleText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}

type();
