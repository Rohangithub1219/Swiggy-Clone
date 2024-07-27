// Toggle navigation menu on smaller screens
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

// Image slider for banner
let currentSlide = 0;
const slides = document.querySelectorAll('.banner img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Filter functionality for restaurants
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const restaurants = document.querySelectorAll('.restaurant');
    restaurants.forEach(restaurant => {
        const name = restaurant.querySelector('h2').textContent.toLowerCase();
        restaurant.style.display = name.includes(query) ? 'block' : 'none';
    });
});
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}