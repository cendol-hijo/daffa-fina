document.addEventListener("DOMContentLoaded", () => {
    // Configuration for the observer
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS animation
                entry.target.classList.add('is-visible');
                
                // Unobserve so the animation only happens once per scroll journey
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all sections configured with a data-animation attribute
    const sections = document.querySelectorAll('section[data-animation]');
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
