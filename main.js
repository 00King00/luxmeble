// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
document.querySelectorAll('nav > ul > li').forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
    });
  });

// Header Scroll Effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Testimonial Slider
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

// Function to show current testimonial
function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show first testimonial on load
showTestimonial(currentTestimonial);

// Automatically change testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}, 5000);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

