const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Toggle the navigation menu when clicking the hamburger icon
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Hide the navigation menu when clicking anywhere outside of it
document.body.addEventListener('click', (e) => {
    if(!nav.contains(e.target) && !hamburger.contains(e.target)) {
         hamburger.classList.remove('active');
         nav.classList.remove('active');
    }
});