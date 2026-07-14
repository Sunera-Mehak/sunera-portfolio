document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* ==========================================================================
       1. Custom Cursor (Desktop Only)
       ========================================================================== */
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });

        // Hover effect for interactive elements
        const hoverables = document.querySelectorAll('a, button, .glass-card, .btn, .nav-link, .contact-detail-item');
        hoverables.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
            });
        });
    }

    /* ==========================================================================
       2. Apple-Inspired Loading Screen
       ========================================================================== */
    const loader = document.getElementById('loader');
    const loaderProgress = document.querySelector('.loader-progress');
    
    if (loader && loaderProgress) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Dissolve loader screen
                setTimeout(() => {
                    loader.style.opacity = '0';
                    loader.style.visibility = 'hidden';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 800);
                }, 300);
            }
            loaderProgress.style.width = `${progress}%`;
        }, 80);
    }

    /* ==========================================================================
       3. Light/Dark Mode Toggle
       ========================================================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Load saved preference or check system setting
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlEl.setAttribute('data-theme', savedTheme);
    } else {
        htmlEl.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Trigger particle/glow updates or log theme change
            console.log(`Theme shifted to: ${newTheme}`);
        });
    }

    /* ==========================================================================
       4. Scroll Progress Indicator & Scroll To Top
       ========================================================================== */
    const scrollBar = document.getElementById('scrollBar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / totalHeight) * 100;
        
        if (scrollBar) {
            scrollBar.style.width = `${scrolled}%`;
        }

        // Scroll to Top button visibility
        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       5. Mobile Navigation Menu Toggle
       ========================================================================== */
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const openIcon = document.querySelector('.menu-icon-open');
    const closeIcon = document.querySelector('.menu-icon-close');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });
    }

    /* ==========================================================================
       6. Active Navbar Highlight (Intersection Observer)
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Target middle viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${activeId}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* ==========================================================================
       7. Typing Animation
       ========================================================================== */
    const roles = ["Aspiring Data Scientist", "AI & ML Student", "Data Analyst"];
    const typedTextEl = document.getElementById('typed-role');
    
    if (typedTextEl) {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Delete characters
                typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Deleting is faster
            } else {
                // Type characters
                typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 120; // Natural typing speed
            }

            if (!isDeleting && charIndex === currentRole.length) {
                // Pause at complete string
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 500; // Small delay before typing next word
            }

            setTimeout(type, typingSpeed);
        }
        
        // Start typing after initial loader finishes
        setTimeout(type, 1800);
    }

    /* ==========================================================================
       8. Animated Counters
       ========================================================================== */
    const counterElements = document.querySelectorAll('.counter');
    
    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseFloat(element.getAttribute('data-target'));
                const decimals = parseInt(element.getAttribute('data-decimals') || '0');
                const duration = 1800; // Counter length in ms
                const startTime = performance.now();
                
                const updateCounter = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    // Cubic easeOut function
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentValue = easeProgress * target;
                    
                    element.textContent = currentValue.toFixed(decimals);
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        element.textContent = target.toFixed(decimals);
                    }
                };
                
                requestAnimationFrame(updateCounter);
                observer.unobserve(element); // Stop observing after running once
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateCounters, {
        root: null,
        threshold: 0.2
    });

    counterElements.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* ==========================================================================
       9. Scroll Reveal Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade-left, .reveal-fade-right');
    
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = parseInt(element.getAttribute('data-delay') || '0');
                
                setTimeout(() => {
                    element.classList.add('reveal-active');
                }, delay);
                
                observer.unobserve(element);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealOnScroll, {
        root: null,
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Special trigger for Skill Cards progress fills
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const fillSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const width = element.style.width; // Grab intended width
                element.style.width = '0%'; // Set zero initially
                
                // Allow browser to render layout and transition to full
                setTimeout(() => {
                    element.style.width = width;
                }, 100);
                
                observer.unobserve(element);
            }
        });
    };

    const skillsObserver = new IntersectionObserver(fillSkills, {
        root: null,
        threshold: 0.1
    });

    progressFills.forEach(fill => {
        skillsObserver.observe(fill);
    });

    /* ==========================================================================
       10. Modal Interactivity (Project 1 Details)
       ========================================================================== */
    const modal = document.getElementById('projectModal');
    const openModalBtn = document.querySelector('.open-project-modal-btn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    if (modal && openModalBtn && closeModalBtn) {
        // Open Modal
        openModalBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });

        // Close Modal
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Enable scrolling
        });

        // Close when clicking overlay backdrop
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    /* ==========================================================================
       11. Button Ripple Effect
       ========================================================================== */
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Only spawn ripple if not touch-clicking or button has overflow visible
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
