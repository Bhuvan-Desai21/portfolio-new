// Create starfield
function createStarfield() {
    const container = document.body;
    const stars = 200;
    
    for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        container.appendChild(star);
    }
}
createStarfield();

// Intersection Observer for sections
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));