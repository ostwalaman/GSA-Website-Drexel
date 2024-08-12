document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            window.scrollTo({
                top: document.getElementById(targetId).offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    const showSlide = index => slides.forEach((slide, i) => slide.style.display = i === index ? 'block' : 'none');

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    };

    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Automatically change image every 5 seconds

    // Welcome message animation
    setTimeout(() => {
        const welcomeMessage = document.querySelector('.welcome-message');
        welcomeMessage.style.opacity = '1';
        welcomeMessage.style.transform = 'translateY(0)';
    }, 500);
});