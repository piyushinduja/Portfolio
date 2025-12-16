function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Recommendations Slider
let currentSlideIndex = 0;

function changeSlide(direction) {
  const cards = document.querySelectorAll('.recommendation-card');
  const dots = document.querySelectorAll('.dot');
  
  cards[currentSlideIndex].classList.remove('active');
  dots[currentSlideIndex].classList.remove('active');
  
  currentSlideIndex += direction;
  
  if (currentSlideIndex >= cards.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = cards.length - 1;
  }
  
  cards[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
  const cards = document.querySelectorAll('.recommendation-card');
  const dots = document.querySelectorAll('.dot');
  
  cards[currentSlideIndex].classList.remove('active');
  dots[currentSlideIndex].classList.remove('active');
  
  currentSlideIndex = index;
  
  cards[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

// Optional: Auto-play slider
setInterval(() => {
  changeSlide(1);
}, 8000); // Change slide every 8 seconds

