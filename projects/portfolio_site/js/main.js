document.addEventListener("DOMContentLoaded", () => {
    // === Menu Mobile Handler ===
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });

    // === Progress Bar Animation Handler ===
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                // Thêm class 'animate' để trigger CSS transition
                progressBar.classList.add('animate');
                observer.unobserve(progressBar);
            }
        });
    };

    const skillsObserver = new IntersectionObserver(animateSkills, {
        root: null,
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        skillsObserver.observe(bar);
    });
});