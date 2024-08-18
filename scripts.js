document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality for navigation links
    const setupSmoothScroll = () => {
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
    };

    // Carousel functionality for event slides
    const setupEventCarousel = () => {
        let currentEventsSlide = 0;
        const eventsSlides = document.querySelectorAll('.carousel-event-item');
        const totalEventsSlides = eventsSlides.length;

        const showEventsSlide = index => eventsSlides.forEach((slide, i) => slide.style.display = i === index ? 'block' : 'none');
        const nextEventsSlide = () => {
            currentEventsSlide = (currentEventsSlide + 1) % totalEventsSlides;
            showEventsSlide(currentEventsSlide);
        };
        const prevEventsSlide = () => {
            currentEventsSlide = (currentEventsSlide - 1 + totalEventsSlides) % totalEventsSlides;
            showEventsSlide(currentEventsSlide);
        };

        document.querySelector('.carousel-event-control.next').addEventListener('click', nextEventsSlide);
        document.querySelector('.carousel-event-control.prev').addEventListener('click', prevEventsSlide);

        showEventsSlide(currentEventsSlide);
        setInterval(nextEventsSlide, 5000); // Auto-change slide every 5 seconds
    };

    // Carousel functionality for photo slides
    const setupPhotoCarousel = () => {
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
        setInterval(nextSlide, 5000); // Auto-change slide every 5 seconds
    };

    // Welcome message animation
    const animateWelcomeMessage = () => {
        setTimeout(() => {
            const welcomeMessage = document.querySelector('.welcome-message');
            welcomeMessage.style.opacity = '1';
            welcomeMessage.style.transform = 'translateY(0)';
        }, 100);
    };

    // Reveal sections on scroll
    const setupSectionReveal = () => {
        const sections = document.querySelectorAll('#about-goals .column, #events-socials .column');

        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            observer.observe(section);
        });
    };

    // Initialize all functionalities
    const initialize = () => {
        setupSmoothScroll();
        setupEventCarousel();
        setupPhotoCarousel();
        animateWelcomeMessage();
        setupSectionReveal();
    };

    // Execute initialization
    initialize();
});