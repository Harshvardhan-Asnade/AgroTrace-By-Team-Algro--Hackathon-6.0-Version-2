/**
 * AgroTrace - Global Application JavaScript
 * Implements technical features across all pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Initialize components
    initDarkMode();
    initMobileMenu();
    initAnimations();
    initBlockchainFeatures();
    initAccessibility();
    initResponsiveImages();
    initTooltips();
});

/**
 * Dark Mode Functionality
 * Handles theme switching and persistence
 */
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    if (!darkModeToggle) return;
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-mode');
        updateDarkModeIcon(darkModeToggle, true);
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateDarkModeIcon(darkModeToggle, isDarkMode);
        
        // Re-render icons after theme change
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    });
}

/**
 * Updates the dark mode toggle icon based on current theme
 */
function updateDarkModeIcon(toggleButton, isDarkMode) {
    // Clear existing icon
    toggleButton.innerHTML = '';
    
    // Create new icon
    const icon = document.createElement('i');
    icon.setAttribute('data-feather', isDarkMode ? 'sun' : 'moon');
    toggleButton.appendChild(icon);
    
    // Update aria-label for accessibility
    toggleButton.setAttribute('aria-label', isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    
    // Re-render feather icon
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

/**
 * Mobile Menu Functionality
 * Handles responsive navigation menu
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (!mobileMenuToggle || !navMenu) return;
    
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const isExpanded = navMenu.classList.contains('show');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-toggle')) {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

/**
 * Animation Functionality
 * Adds entrance animations to elements
 */
function initAnimations() {
    // Add animation classes to elements as they enter the viewport
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animation || 'fade-in';
                element.classList.add(animation);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Blockchain Integration Features
 * Handles connection to blockchain for verification
 */
function initBlockchainFeatures() {
    const blockchainVerifyButtons = document.querySelectorAll('.blockchain-verify');
    
    if (blockchainVerifyButtons.length === 0) return;
    
    blockchainVerifyButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const productId = button.dataset.productId;
            const verificationResult = document.querySelector(`#verification-result-${productId}`);
            
            if (!verificationResult) return;
            
            try {
                // Show loading state
                button.disabled = true;
                verificationResult.innerHTML = '<div class="spinner"></div> Verifying on blockchain...';
                
                // Simulate blockchain verification (would connect to actual blockchain in production)
                await simulateBlockchainVerification();
                
                // Show success state
                verificationResult.innerHTML = '<span class="status-badge status-success">Verified on Blockchain</span>';
            } catch (error) {
                // Show error state
                verificationResult.innerHTML = '<span class="status-badge status-danger">Verification Failed</span>';
                console.error('Blockchain verification error:', error);
            } finally {
                button.disabled = false;
            }
        });
    });
}

/**
 * Simulates blockchain verification process
 * In production, this would connect to Ethereum or other blockchain
 */
async function simulateBlockchainVerification() {
    // Simulate network delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                verified: true,
                timestamp: new Date().toISOString(),
                blockNumber: Math.floor(Math.random() * 1000000) + 15000000
            });
        }, 1500);
    });
}

/**
 * Accessibility Enhancements
 * Improves keyboard navigation and screen reader support
 */
function initAccessibility() {
    // Add focus styles to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    interactiveElements.forEach(element => {
        // Ensure all interactive elements have appropriate roles and labels
        if (element.tagName === 'BUTTON' && !element.getAttribute('aria-label') && !element.textContent.trim()) {
            console.warn('Button missing accessible label:', element);
        }
        
        // Ensure all images have alt text
        if (element.tagName === 'IMG' && !element.getAttribute('alt')) {
            console.warn('Image missing alt text:', element);
        }
    });
    
    // Add skip to content link for keyboard users
    const main = document.querySelector('main');
    if (main && !document.getElementById('skip-to-content')) {
        const skipLink = document.createElement('a');
        skipLink.id = 'skip-to-content';
        skipLink.href = '#main';
        skipLink.className = 'sr-only sr-only-focusable';
        skipLink.textContent = 'Skip to content';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add ID to main content
        main.id = 'main';
    }
}

/**
 * Responsive Images
 * Loads appropriate image sizes based on viewport
 */
function initResponsiveImages() {
    // Check for support of loading="lazy"
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img.lazy');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.loading = 'lazy';
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyImages = document.querySelectorAll('img.lazy');
        if (lazyImages.length === 0) return;
        
        const lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    }
}

/**
 * Tooltip Functionality
 * Initializes tooltips for elements with data-tooltip attribute
 */
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    if (tooltipElements.length === 0) return;
    
    tooltipElements.forEach(element => {
        const tooltipText = element.dataset.tooltip;
        
        // Create tooltip container
        element.classList.add('tooltip');
        
        // Create tooltip text element
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = tooltipText;
        
        // Add tooltip to element
        element.appendChild(tooltip);
    });
}

// Global toast notifications for user feedback
window.showToast = (message, type = 'info', duration = 3000) => {
    const toastContainer = document.getElementById('toast-container') || createToastContainer();
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${type}`);
    toast.innerHTML = `
        <div class="toast-content">
            ${message}
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        toast.addEventListener('transitionend', () => toast.remove());
    }, duration);
};

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
}