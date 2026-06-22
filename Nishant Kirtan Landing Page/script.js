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
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,0,0,0.4)'
      : 'none';
  });
}

// Booking form → Google Sheet (Apps Script Web App)
// Paste your deployed Web app URL between the quotes below.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxMK1jNi5wtu-G6nKUPgiJ64NNXd6Smh_yxsoTUjKitSv-lOWtad32ucv8Rq7osiis0/exec';

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    const submitBtn = bookingForm.querySelector('.form-submit');
    const success = document.getElementById('formSuccess');
    const original = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    const data = Object.fromEntries(new FormData(bookingForm).entries());

    try {
      if (SHEET_ENDPOINT.startsWith('http')) {
        await fetch(SHEET_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(data)
        });
      }
      success.classList.add('show');
      bookingForm.reset();
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (err) {
      alert('Sorry, something went wrong. Please try again or contact us directly.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });
}
