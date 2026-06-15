window.transitionToPage = function(url) {
    document.body.style.animation = 'fadeOutPage 0.4s ease-out forwards';
    setTimeout(() => {
        window.location.href = url;
    }, 400);
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Intercept links for smooth transition
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                e.preventDefault();
                transitionToPage(href);
            }
        });
    });

    // 1. Scroll Reveal Animation using IntersectionObserver
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Check if there's a delay data attribute
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, parseInt(delay));
                } else {
                    entry.target.classList.add('revealed');
                }
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 2. Animated Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Lower is faster

    const startCounters = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const updateCount = () => {
                    const targetValue = +target.getAttribute('data-target');
                    const count = +target.innerText;
                    const inc = targetValue / speed;

                    if (count < targetValue) {
                        target.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        target.innerText = targetValue;
                    }
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        startCounters.observe(counter);
    });

    // 3. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
