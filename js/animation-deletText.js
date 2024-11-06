const texts = ["Developpeur Web", "Web Designer", "Game Developper"];
let index = 0; // Pour suivre le texte actuel
let charIndex = 0; // Pour suivre le caractère actuel dans le texte
let isDeleting = false; // Savoir si on est en train d'effacer

const typingSpeed = 100; // Vitesse d'écriture
const erasingSpeed = 50; // Vitesse d'effacement
const delayBetweenTexts = 1500; // Délai entre chaque texte

function typeText() {
  const textElement = document.getElementById("animated-text");
  const currentText = texts[index];

  if (!isDeleting) {
    // Ajouter un caractère à la fois
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    // Si le texte est complètement affiché
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, delayBetweenTexts); // Délai avant d'effacer
    } else {
      setTimeout(typeText, typingSpeed); // Continuer d'écrire
    }
  } else {
    // Effacer un caractère à la fois
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    // Si tout le texte est effacé
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length; // Passer au texte suivant
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(typeText, erasingSpeed); // Continuer d'effacer
    }
  }
}

// Lancer l'animation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  typeText();
});
