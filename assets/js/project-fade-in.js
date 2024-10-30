document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project');
  
    projectCards.forEach(card => {
      card.style.opacity = 0;
      card.style.transition = 'opacity 1s ease';
  

      setTimeout(() => {
        card.style.opacity = 1;
      }, 100);
    });
  });
  