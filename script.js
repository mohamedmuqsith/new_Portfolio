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