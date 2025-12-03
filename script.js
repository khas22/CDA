// CDA AND PARTNERS CONSULTING - Enhanced JavaScript

// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScroll();
    initializeFormHandling();
    initializeAnimations();
    initializeActiveNavigation();
});

// Navigation System
function initializeNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mainNav.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
        });
        
        // Close mobile menu when clicking on links
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header-nav')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Active Navigation Highlighting
function initializeActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPage || (currentPage === 'index.html' && linkPath === '/')) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll for Internal Links
function initializeSmoothScroll() {
    document.addEventListener('click', function(e){
        if(e.target.matches('a[href^="#"]')){
            const id = e.target.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if(el){ 
                e.preventDefault(); 
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                }); 
            }
        }
    });
}

// Form Handling with Enhanced Features
function initializeFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', handleEnhancedFormSubmit);
        
        // Add loading states
        const submitButtons = form.querySelectorAll('button[type="submit"]');
        submitButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (form.checkValidity()) {
                    this.innerHTML = '<span class="loading">Sending...</span>';
                    this.disabled = true;
                }
            });
        });
    });
}

function handleEnhancedFormSubmit(e) {
    const form = e.target;
    const hp = document.getElementById('company_website'); // honeypot field
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Honeypot spam check
    if(hp && hp.value) { 
        showFormMessage(form, 'Spam detected. Please try again.', 'error');
        e.preventDefault(); 
        return false; 
    }
    
    // Basic validation
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        resetSubmitButton(submitButton);
        e.preventDefault();
        return false;
    }
    
    // Simulate form submission (replace with actual backend integration)
    e.preventDefault();
    
    // Simulate API call delay
    setTimeout(() => {
        showFormMessage(form, 'Thank you! We\'ll be in touch within 24 hours.', 'success');
        form.reset();
        resetSubmitButton(submitButton);
    }, 1500);
    
    return false;
}

function showFormMessage(form, message, type) {
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0.5rem;
        font-weight: 500;
        ${type === 'success' ? 'background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;' : 'background: #fee2e2; color: #991b1b; border: 1px solid #fecaca;'}
    `;
    
    form.insertBefore(messageDiv, form.firstChild);
    
    // Auto-remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

function resetSubmitButton(button) {
    if (button) {
        button.innerHTML = 'Send';
        button.disabled = false;
    }
}

// Animation System
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .team-member, .testimonial, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .loading {
            display: inline-block;
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Back to Top Button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--deep);
        color: white;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(button);
    
    const toggleBackToTop = debounce(() => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    }, 100);
    
    window.addEventListener('scroll', toggleBackToTop);
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
createBackToTopButton();

// Enhanced form handling for the original function
function handleFormSubmit(e){
    return handleEnhancedFormSubmit(e);
}
