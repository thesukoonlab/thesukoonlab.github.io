document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Setup the Intersection Observer for cinematic fade-ins
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS transition
                entry.target.classList.add('is-visible');
                
                // Optional: Stop observing once it has faded in to prevent repeating the animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Select all sections we want to animate
    // We exclude the hero section so it loads immediately
    const sectionsToAnimate = document.querySelectorAll('section');

    // 3. Add the base hidden class and attach the observer
    sectionsToAnimate.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // 4. Subtle hover effect for the Hero Logo (Parallax-lite)
    const logo = document.querySelector('.logo');
    if(logo) {
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on cursor position
            const xRotation = ((y - rect.height / 2) / rect.height) * 15; // Max 15 deg
            const yRotation = ((x - rect.width / 2) / rect.width) * -15; // Max -15 deg
            
            logo.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
            logo.style.transition = `none`; 
        });

        logo.addEventListener('mouseleave', () => {
            // Reset to original position when mouse leaves
            logo.style.transform = `perspective(500px) rotateX(0) rotateY(0) scale(1)`;
            logo.style.transition = `transform 0.5s ease`;
        });
    }
});
