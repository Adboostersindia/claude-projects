// Testimonial slider
let currentSlide = 0;
const track = document.getElementById('testimonials-track');
const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.testimonial-card');

function goToSlide(index) {
  if (window.innerWidth <= 640) return;
  currentSlide = index;
  const cardWidth = cards[0].offsetWidth + 24;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// Auto-advance
setInterval(() => {
  goToSlide((currentSlide + 1) % 3);
}, 4000);

// Sticky nav shadow on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,0.4)'
    : 'none';
});
