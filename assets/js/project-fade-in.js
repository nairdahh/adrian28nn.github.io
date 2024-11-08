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
  

  document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.circle-image');
    
    if (image) {
      image.style.opacity = 0;
      
      image.style.transition = 'opacity 1s ease';
      
      setTimeout(() => {
        image.style.opacity = 1;
      }, 100);
    }
  });
  