document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for manual anchor links
    const sidebarLinks = document.querySelectorAll('.manual-sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobile Menu Toggle (Simplified)
    // Add logic here if a burger menu is implemented in the future

    // Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    if (slides.length > 0) {
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        // Auto switch every 2 seconds
        setInterval(nextSlide, 4000);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });
    }
});
