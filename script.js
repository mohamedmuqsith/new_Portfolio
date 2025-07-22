document.addEventListener('DOMContentLoaded', function() {

    // --- 🎬 PRELOADER LOGIC ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });

    // --- 🖱️ CUSTOM CURSOR LOGIC ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    document.querySelectorAll('.interactive').forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
    });
    
    document.body.addEventListener('mouseleave', () => {
        cursorDot.classList.add('hidden');
        cursorOutline.classList.add('hidden');
    });

    document.body.addEventListener('mouseenter', () => {
        cursorDot.classList.remove('hidden');
        cursorOutline.classList.remove('hidden');
    });


    // --- ✨ TYPED.JS INITIALIZATION ---
    new Typed('#typed-text', {
        strings: ["Full-Stack Developer", "Data Analyst", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // --- 📊 SKILLS CHART LOGIC ---
    const ctx = document.getElementById('skillsChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Python', 'MongoDB', 'Data Analysis', 'Java'],
                datasets: [{
                    label: 'Skill Proficiency',
                    data: [90, 85, 80, 75, 85, 70, 90, 75],
                    fill: true,
                    backgroundColor: 'rgba(0, 191, 255, 0.2)',
                    borderColor: 'rgb(0, 191, 255)',
                    pointBackgroundColor: 'rgb(0, 191, 255)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(0, 191, 255)'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
                        grid: { color: 'rgba(255, 255, 255, 0.2)' },
                        pointLabels: {
                            color: '#ccd6f6',
                            font: {
                                size: 14
                            }
                        },
                        ticks: {
                            color: '#ccd6f6',
                            backdropColor: 'transparent',
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#ccd6f6'
                        }
                    }
                }
            }
        });
    }

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
});