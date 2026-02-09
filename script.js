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
});
