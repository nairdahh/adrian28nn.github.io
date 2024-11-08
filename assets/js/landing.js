//typed.js
var typed = new Typed('#hello-there', {
    strings: ['hello there!'],
    typeSpeed: 80,
    showCursor: false,
    startDelay: 200
  });

// typed.js initialization
var typed = new Typed('#hello-there', {
  strings: ['hello there!'],
  typeSpeed: 80,
  showCursor: false,
  startDelay: 200
});

window.onload = function() {
  // Apply delay and fade-in to .lp-345
  setTimeout(function() {
    var lp345 = document.querySelector('.lp-345');
    lp345.style.transition = 'opacity 1s ease';
    lp345.style.opacity = 1;
  }, 1800); // 1.35s delay

  // Apply delay and fade-in to .lp-line2
  setTimeout(function() {
    var lpline2 = document.querySelector('.lp-line2');
    lpline2.style.transition = 'opacity 1s ease';
    lpline2.style.opacity = 1;
  }, 1200); // 1.35s delay
};
