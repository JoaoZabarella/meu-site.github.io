document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector(".typing-text");
    const words = ["Desenvolvedor Java", "Desenvolvedor de Software", "Analista de Software", "Desenvolvedor de Banco de Dados", "Desenvolvedor Python"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[wordIndex];
        let displayText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
        typingText.textContent = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();

    // Toggle para o menu responsivo
    const menuIcon = document.querySelector(".fa-bars");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // Fechar o menu ao clicar em um link (responsividade)
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            navbar.classList.remove("active");
        });
    });
});

