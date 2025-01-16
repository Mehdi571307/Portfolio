let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(var(--blue-clr) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
  hamburgerWrapper.addEventListener('click', () => {
      hamburgerWrapper.classList.toggle('active');
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) { // Seuil de défilement, modifiable à ton goût
      navbar.style.background = 'rgba(0, 0, 0, 1)'; // Remplacer la transparence par une couleur solide
  } else {
      navbar.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'; // Rétablir le gradient
  }
});

 // Quand le document est prêt
 document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens d'ancrage
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Empêche le comportement par défaut de l'ancre
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Décale par la hauteur de la barre de navigation
                  behavior: 'smooth'
              });
          }
      });
  });
});
