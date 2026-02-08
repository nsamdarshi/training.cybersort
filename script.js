// ===========================
// Smooth Scroll for Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// FAQ Accordion
// ===========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===========================
// Scroll-Based Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for scroll animation
const animateOnScroll = document.querySelectorAll(`
    .audience-card,
    .urgency-card,
    .outcome-card,
    .difference-card,
    .timeline-item,
    .faq-item
`);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Header Background on Scroll
// ===========================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 26, 0.95)';
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 26, 0.8)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Mobile CTA Visibility
// ===========================
const mobileCTA = document.querySelector('.mobile-cta');
const detailsSection = document.querySelector('#register');

if (mobileCTA && detailsSection) {
    const mobileCTAObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (window.innerWidth <= 768) {
                if (entry.isIntersecting) {
                    mobileCTA.style.transform = 'translateY(100%)';
                } else {
                    mobileCTA.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    mobileCTAObserver.observe(detailsSection);
}

// Hide mobile CTA on desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileCTA) {
        mobileCTA.style.display = 'none';
    } else if (mobileCTA) {
        mobileCTA.style.display = 'block';
    }
});

// ===========================
// Countdown Timer for Seats (Optional)
// ===========================
function updateSeatsRemaining() {
    const seatsElements = document.querySelectorAll('.urgency-badge, .mobile-cta-seats');
    const seats = Math.floor(Math.random() * 5) + 8; // Random between 8-12
    
    seatsElements.forEach(el => {
        if (el.textContent.includes('seats')) {
            el.textContent = `Only ${seats} seats remaining`;
        }
    });
}

// Update seats count on page load
// updateSeatsRemaining();

// ===========================
// Prevent Empty Form Submission
// ===========================
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission via AJAX or redirect
        console.log('Form submitted');
    });
});

// ===========================
// Copy to Clipboard (if needed)
// ===========================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ===========================
// Lazy Load Images (if added later)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Performance: Reduce Motion for Accessibility
// ===========================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ===========================
// Analytics Tracking (Placeholder)
// ===========================
function trackEvent(eventName, eventData = {}) {
    // Google Analytics or other tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            button_text: btn.textContent.trim(),
            button_location: btn.closest('section')?.id || 'unknown'
        });
    });
});

// Track FAQ interactions
faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        trackEvent('faq_click', {
            question_index: index,
            question_text: question.textContent.trim()
        });
    });
});

// ===========================
// WhatsApp Button Enhancement
// ===========================
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('whatsapp_click', {
            source: link.closest('section')?.id || 'footer'
        });
    });
});

// ===========================
// Add Loading State to Buttons
// ===========================
function addLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span style="opacity: 0.6;">Processing...</span>';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

// ===========================
// Easter Egg: Konami Code
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.log('🎉 Konami Code Activated! Special discount: CYBERSAFE2026');
        alert('🎉 Special Discount Code: CYBERSAFE2026');
    }
});

// ===========================
// Initialize on DOM Ready
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Cybersort Training Landing Page Loaded');
    
    // Add any initialization code here
    
    // Smooth reveal for hero section
    setTimeout(() => {
        document.querySelector('.hero').style.opacity = '1';
    }, 100);
});

// ===========================
// Add Parallax Effect to Gradient Orbs
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.05;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// Service Worker Registration (for PWA)
// ===========================
if ('serviceWorker' in navigator) {
    // Uncomment when service worker is ready
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.error('Service Worker registration failed:', err));
}
