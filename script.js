  document.addEventListener('DOMContentLoaded', function() {
            // --- 🎬 PRELOADER LOGIC ---
            const preloader = document.querySelector('.preloader');
            window.addEventListener('load', () => {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, 500);
            });

            // --- 🖱️ CUSTOM CURSOR LOGIC ---
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                cursorOutline.style.left = `${posX}px`;
                cursorOutline.style.top = `${posY}px`;
            });

            document.querySelectorAll('.interactive').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorOutline.classList.add('hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursorOutline.classList.remove('hover');
                });
                
                el.addEventListener('click', () => {
                    cursorOutline.classList.add('click');
                    setTimeout(() => {
                        cursorOutline.classList.remove('click');
                    }, 500);
                });
            });
            
            document.body.addEventListener('mouseleave', () => {
                cursorDot.classList.add('hidden');
                cursorOutline.classList.add('hidden');
            });

            document.body.addEventListener('mouseenter', () => {
                cursorDot.classList.remove('hidden');
                cursorOutline.classList.remove('hidden');
            });

            // --- 📱 MOBILE MENU TOGGLE ---
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // --- ✨ TYPED.JS INITIALIZATION ---
            new Typed('#typed-text', {
                strings: ["Full-Stack Developer", "Data Analyst", "Problem Solver", "MERN Stack Expert"],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1500,
                loop: true
            });

            // --- 🌟 STAGGERED SCROLL ANIMATION LOGIC ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // Apply staggered delay to children if the parent is a grid
                        const children = entry.target.querySelectorAll('.skill-card, .project-card');
                        children.forEach((child, index) => {
                            child.style.setProperty('--delay', `${index * 100}ms`);
                        });
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
            
            // --- 📊 CHART.JS INITIALIZATION ---
            // Frontend Skills Chart
            const frontendCtx = document.getElementById('frontendChart').getContext('2d');
            const frontendChart = new Chart(frontendCtx, {
                type: 'radar',
                data: {
                    labels: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design', 'UI/UX'],
                    datasets: [{
                        label: 'Frontend Skills',
                        data: [95, 90, 85, 80, 85, 75],
                        backgroundColor: 'rgba(0, 191, 255, 0.2)',
                        borderColor: 'rgba(0, 191, 255, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 191, 255, 1)',
                        pointRadius: 4
                    }]
                },
                options: {
                    scales: {
                        r: {
                            angleLines: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            grid: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            suggestedMin: 0,
                            suggestedMax: 100,
                            ticks: {
                                backdropColor: 'transparent',
                                color: 'rgba(136, 146, 176, 0.8)'
                            },
                            pointLabels: {
                                color: 'rgba(204, 214, 246, 0.8)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            
            // Backend & Data Skills Chart
            const backendCtx = document.getElementById('backendChart').getContext('2d');
            const backendChart = new Chart(backendCtx, {
                type: 'bar',
                data: {
                    labels: ['Node.js', 'Express', 'MongoDB', 'Python', 'Data Analysis', 'TensorFlow.js'],
                    datasets: [{
                        label: 'Skill Level',
                        data: [80, 75, 70, 65, 75, 60],
                        backgroundColor: [
                            'rgba(0, 191, 255, 0.7)',
                            'rgba(0, 191, 255, 0.7)',
                            'rgba(0, 191, 255, 0.7)',
                            'rgba(0, 191, 255, 0.7)',
                            'rgba(0, 191, 255, 0.7)',
                            'rgba(0, 191, 255, 0.7)'
                        ],
                        borderColor: [
                            'rgba(0, 191, 255, 1)',
                            'rgba(0, 191, 255, 1)',
                            'rgba(0, 191, 255, 1)',
                            'rgba(0, 191, 255, 1)',
                            'rgba(0, 191, 255, 1)',
                            'rgba(0, 191, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            ticks: {
                                color: 'rgba(204, 214, 246, 0.8)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: 'rgba(204, 214, 246, 0.8)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
            
            // --- 🎯 BACK TO TOP BUTTON ---
            const backToTopBtn = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                    document.querySelector('header').classList.add('scrolled');
                } else {
                    backToTopBtn.classList.remove('visible');
                    document.querySelector('header').classList.remove('scrolled');
                }
            });
            
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // --- 🎯 ACTIVE NAV LINK ON SCROLL ---
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links a');
            
            window.addEventListener('scroll', () => {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= (sectionTop - 300)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${current}`) {
                        item.classList.add('active');
                    }
                });
            });
        });

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
            } else {
                const techs = card.querySelectorAll('.project-tech span');
                let hasTech = false;
                techs.forEach(tech => {
                    if (tech.textContent.toLowerCase().includes(filterValue)) {
                        hasTech = true;
                    }
                });
                card.style.display = hasTech ? 'block' : 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // --- 💬 TESTIMONIAL SLIDER LOGIC ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    if (slides.length > 0) {
        showSlide(currentSlide);

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        // Optional: Auto-slide
        setInterval(() => {
            nextBtn.click();
        }, 7000);
    }


    // --- 📞 CONTACT FORM VALIDATION & SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            formStatus.textContent = 'Sending...';

            // This is a placeholder for form submission.
            // Replace with your actual form submission logic (e.g., using Fetch API to a serverless function or a service like Formspree).
            // For demonstration, we'll simulate a successful submission after 2 seconds.
            setTimeout(() => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'var(--primary-color)';
                contactForm.reset();
            }, 2000);
        });
    }
});

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particle-canvas'); // Attach the canvas to our div

    // Particle settings
    const particlesLength = Math.floor(window.innerWidth / 15);
    window.particles = [];
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    // Use the color scheme from the CSS variables
    let bgColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color').trim();
    let particleColor = color(getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim());

    background(bgColor);

    particles.forEach((p, index) => {
        p.update();
        p.draw(particleColor);
        p.checkParticles(particles.slice(index));
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-0.6, 0.6), random(-0.6, 0.6));
        this.size = 2;
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw(particleColor) {
        noStroke();
        fill(particleColor);
        circle(this.pos.x, this.pos.y, this.size);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 120) {
                // Check distance to mouse
                const mouse_d = dist(this.pos.x, this.pos.y, mouseX, mouseY);
                if (mouse_d < 200) {
                    let lineColor = color(getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim());
                    let alpha = map(d, 0, 120, 0, 0.25); // Fade lines based on distance
                    let mouseAlpha = map(mouse_d, 0, 200, 0, 1); // Fade lines based on mouse proximity
                    
                    stroke(red(lineColor), green(lineColor), blue(lineColor), 255 * alpha * mouseAlpha);
                    strokeWeight(1);
                    line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                }
            }
        });
    }
}

