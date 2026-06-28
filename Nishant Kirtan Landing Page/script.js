// Testimonial slider
let currentSlide = 0;
const track = document.getElementById('testimonials-track');
const cards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('testiPrev');
const nextBtn = document.getElementById('testiNext');

function perView() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}
function slideCount() {
  return Math.max(1, cards.length - perView() + 1);
}

// Build dots dynamically
function buildDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  for (let i = 0; i < slideCount(); i++) {
    const b = document.createElement('button');
    b.className = 'dot' + (i === 0 ? ' active' : '');
    b.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(b);
  }
}

const GAP = 24;

function setCardWidths() {
  const slider = document.getElementById('testimonials');
  if (!slider) return;
  const pv = perView();
  if (window.innerWidth <= 640) {
    cards.forEach(c => { c.style.width = ''; });
    return;
  }
  const w = (slider.clientWidth - GAP * (pv - 1)) / pv;
  cards.forEach(c => { c.style.width = w + 'px'; });
}

function updateArrows() {
  if (prevBtn) prevBtn.disabled = currentSlide <= 0;
  if (nextBtn) nextBtn.disabled = currentSlide >= slideCount() - 1;
}

function goToSlide(index) {
  const total = slideCount();
  if (index >= total) index = total - 1;
  if (index < 0) index = 0;
  currentSlide = index;
  const cardWidth = cards[0].offsetWidth + GAP;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  if (dotsContainer) {
    [...dotsContainer.children].forEach((d, i) => d.classList.toggle('active', i === index));
  }
  updateArrows();
}

if (cards.length) {
  setCardWidths();
  buildDots();
  goToSlide(0);
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  // Rebuild on resize (responsive perView)
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { setCardWidths(); buildDots(); goToSlide(0); }, 200);
  });
  // Recompute once images/fonts settle
  window.addEventListener('load', () => { setCardWidths(); goToSlide(currentSlide); });
}

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
      bookingForm.reset();
      window.location.href = 'thank-you';
    } catch (err) {
      alert('Sorry, something went wrong. Please try again or contact us directly.');
      submitBtn.disabled = false;
      submitBtn.textContent = original;
    }
  });
}
