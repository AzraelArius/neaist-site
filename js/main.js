// ===================================
// NEAIST Website - Main JavaScript
// Interactive Features & Functionality
// ===================================

// ========== DOM Content Loaded ==========
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initNavDropdowns();
    initScrollEffects();
    initHeroCarousel();
    initBackToTop();
    initAnimatedStats();
    initFAQ();
    initContactForm();
    initScrollReveal();
    initSmoothScroll();
});

// ========== Mobile Menu Toggle ==========
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-dropdown-link');

    function resetHamburger() {
        if (!hamburger) {
            return;
        }

        const spans = hamburger.querySelectorAll('span');
        hamburger.classList.remove('active');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    function closeMobileMenu() {
        if (!navMenu) {
            return;
        }

        navMenu.classList.remove('active');
        document.querySelectorAll('.nav-item-dropdown.open').forEach((item) => {
            item.classList.remove('open');
        });
        document.querySelectorAll('[data-nav-dropdown]').forEach((button) => {
            button.setAttribute('aria-expanded', 'false');
        });
        resetHamburger();
    }
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (link.hasAttribute('data-nav-dropdown')) {
                    return;
                }

                closeMobileMenu();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

// ========== Navigation Dropdowns ==========
function initNavDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-item-dropdown');

    if (!dropdowns.length) {
        return;
    }

    function closeDropdown(dropdown) {
        const button = dropdown.querySelector('[data-nav-dropdown]');
        dropdown.classList.remove('open');

        if (button) {
            button.setAttribute('aria-expanded', 'false');
        }
    }

    function openDropdown(dropdown) {
        const button = dropdown.querySelector('[data-nav-dropdown]');

        dropdowns.forEach((item) => {
            if (item !== dropdown) {
                closeDropdown(item);
            }
        });

        dropdown.classList.add('open');

        if (button) {
            button.setAttribute('aria-expanded', 'true');
        }
    }

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector('[data-nav-dropdown]');
        const links = Array.from(dropdown.querySelectorAll('.nav-dropdown-link'));

        if (!button) {
            return;
        }

        button.addEventListener('click', (event) => {
            event.preventDefault();
            const isOpen = dropdown.classList.contains('open');

            if (isOpen) {
                closeDropdown(dropdown);
            } else {
                openDropdown(dropdown);
            }
        });

        button.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                openDropdown(dropdown);
                links[0]?.focus();
            }

            if (event.key === 'Escape') {
                closeDropdown(dropdown);
                button.focus();
            }
        });

        links.forEach((link, index) => {
            link.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    closeDropdown(dropdown);
                    button.focus();
                }

                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    links[(index + 1) % links.length]?.focus();
                }

                if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    links[(index - 1 + links.length) % links.length]?.focus();
                }
            });
        });
    });

    document.addEventListener('click', (event) => {
        dropdowns.forEach((dropdown) => {
            if (!dropdown.contains(event.target)) {
                closeDropdown(dropdown);
            }
        });
    });
}

// ========== Scroll Effects ==========
function initScrollEffects() {
    const navbar = document.getElementById('navbar');

    if (!navbar) {
        return;
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========== Back to Top Button ==========
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ========== Hero Carousel ==========
function initHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');

    if (!carousel) {
        return;
    }

    const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    const dots = Array.from(carousel.querySelectorAll('.hero-carousel-dot'));
    const prevButton = carousel.querySelector('[data-carousel-action="prev"]');
    const nextButton = carousel.querySelector('[data-carousel-action="next"]');
    let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
    let intervalId = null;

    if (activeIndex < 0) {
        activeIndex = 0;
    }

    function renderSlide(index) {
        activeIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('is-active', slideIndex === activeIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === activeIndex);
        });
    }

    function startAutoplay() {
        stopAutoplay();
        intervalId = window.setInterval(() => {
            renderSlide(activeIndex + 1);
        }, 5000);
    }

    function stopAutoplay() {
        if (intervalId) {
            window.clearInterval(intervalId);
        }
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            renderSlide(activeIndex - 1);
            startAutoplay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            renderSlide(activeIndex + 1);
            startAutoplay();
        });
    }

    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            renderSlide(dotIndex);
            startAutoplay();
        });
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    renderSlide(activeIndex);
    startAutoplay();
}

// ========== Animated Statistics Counter ==========
function initAnimatedStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    if (statNumbers.length > 0) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    statNumbers.forEach(stat => {
                        animateCounter(stat);
                    });
                }
            });
        }, observerOptions);
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / steps);
}

// ========== FAQ Accordion ==========
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// ========== Contact Form Handling ==========
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: contactForm.querySelector('#name').value,
                email: contactForm.querySelector('#email').value,
                subject: contactForm.querySelector('#subject').value,
                message: contactForm.querySelector('#message').value
            };
            
            // Validate form
            if (validateForm(formData)) {
                // Show success message
                showNotification('Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // In a real application, you would send the data to a server here
                // Example: sendFormData(formData);
            } else {
                showNotification('Por favor, preencha todos os campos corretamente.', 'error');
            }
        });
    }
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
        data.name.trim() !== '' &&
        emailRegex.test(data.email) &&
        data.subject.trim() !== '' &&
        data.message.trim() !== ''
    );
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#06D6A0' : '#EF476F'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// ========== Scroll Reveal Animation ==========
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// ========== Smooth Scroll for Anchor Links ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only process if it's a valid anchor
            if (href && href !== '#' && href.startsWith('#')) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const navbarHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ========== Lazy Loading Images ==========
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== Theme Toggle (Optional - Dark Mode) ==========
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (themeToggle) {
        // Check for saved theme preference or default to system preference
        const currentTheme = localStorage.getItem('theme') || 
                            (prefersDarkScheme.matches ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// ========== Parallax Effect ==========
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// ========== Utility Functions ==========

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========== Intersection Observer Polyfill Check ==========
if (!('IntersectionObserver' in window)) {
    console.log('IntersectionObserver not supported. Consider adding a polyfill.');
}

// ========== Service Worker Registration (for PWA) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you create a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// ========== Console Message ==========
console.log('%c🌍 NEAIST - Núcleo dos Estudantes Africanos do IST', 'color: #009DE0; font-size: 16px; font-weight: bold;');
console.log('%cWebsite desenvolvido com ❤️ para a comunidade', 'color: #5A5A5A; font-size: 12px;');
