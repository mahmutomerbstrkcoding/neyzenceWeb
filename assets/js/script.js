// NeyzenCe Website JavaScript

// Translation data
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.terms': 'Terms',
        'nav.privacy': 'Privacy',
        'hero.title': 'Master the Sacred Art of <span class="highlight">Ney</span>',
        'hero.subtitle': 'Master the traditional Turkish flute with interactive lessons, music sheets, and progressive difficulty levels',
        'hero.download_ios': 'Download for iOS',
        'hero.download_android': 'Get on Android',
        'features.title': 'App Features',
        'features.interactive.title': 'Interactive Music Sheets',
        'features.interactive.description': 'Follow along with visual music sheets that highlight notes as you play, making learning intuitive and engaging.',
        'features.progressive.title': 'Progressive Difficulty',
        'features.progressive.description': 'Start with beginner levels and advance through intermediate to expert pieces at your own pace.',
        'features.audio.title': 'Audio Playback',
        'features.audio.description': 'Listen to high-quality recordings of each piece to perfect your technique and timing.',
        'features.fundamentals.title': 'Learn Fundamentals',
        'features.fundamentals.description': 'Master the basics of Ney playing with detailed tutorials on posture, breathing, and embouchure.',
        'features.offline.title': 'Offline Access',
        'features.offline.description': 'Download music sheets and audio files to practice anywhere, even without an internet connection.',
        'features.traditional.title': 'Traditional Wisdom',
        'features.traditional.description': 'Learn from master Neyzen Cemil Baştürk\'s expertise, preserving centuries of musical tradition.',
        'about.title': 'About NeyzenCe',
        'download.title': 'Download NeyzenCe',
        'download.subtitle': 'Available on iOS and Android devices',
        'contact.title': 'Contact Us',
        'contact.developer': 'Developer',
        'contact.content_creator': 'Content Creator',
        'contact.support': 'Support',
        'about.quote_translation': 'Listen to how the ney complains, telling tales of separation.',
        'about.paragraph1': 'Dear Ney enthusiasts, we have prepared the NeyzenCe app hoping to provide you with relative ease in the challenging journey of learning the Ney.',
        'about.paragraph2': 'It should not be forgotten that the Ney, in its most beautiful and correct form, should be learned through apprenticeship with a master teacher. Our aim is only to support those who cannot find this opportunity for various reasons.',
        'about.paragraph3': 'May your breath say "Hû". With our respect, greetings, and love.',
        'footer.terms': 'Terms of Service',
        'footer.privacy': 'Privacy Policy',
        'footer.contact': 'Contact',
        'footer.copyright': '&copy; 2024 NeyzenCe. All rights reserved. All musical content by Neyzen Cemil Baştürk.'
    },
    tr: {
        'nav.home': 'Ana Sayfa',
        'nav.features': 'Özellikler',
        'nav.about': 'Hakkında',
        'nav.contact': 'İletişim',
        'nav.terms': 'Şartlar',
        'nav.privacy': 'Gizlilik',
        'hero.title': 'Kutsal <span class="highlight">Ney</span> Sanatında Ustalaşın',
        'hero.subtitle': 'Etkileşimli dersler, nota kağıtları ve aşamalı zorluk seviyeleri ile geleneksel Türk neyini ustalaşın',
        'hero.download_ios': 'iOS için İndir',
        'hero.download_android': 'Android\'de Edinin',
        'features.title': 'Uygulama Özellikleri',
        'features.interactive.title': 'Etkileşimli Nota Kağıtları',
        'features.interactive.description': 'Çalarken notaları vurgulayan görsel nota kağıtları ile takip edin, öğrenmeyi sezgisel ve ilgi çekici hale getirin.',
        'features.progressive.title': 'Aşamalı Zorluk',
        'features.progressive.description': 'Başlangıç seviyesinden başlayın ve kendi hızınızda orta seviyeden uzman parçalarına ilerleyin.',
        'features.audio.title': 'Ses Oynatma',
        'features.audio.description': 'Tekniğinizi ve zamanlamanızı mükemmelleştirmek için her parçanın yüksek kaliteli kayıtlarını dinleyin.',
        'features.fundamentals.title': 'Temelleri Öğrenin',
        'features.fundamentals.description': 'Duruş, nefes alma ve ağızlık tekniği hakkında ayrıntılı eğitimlerle Ney çalışının temellerini öğrenin.',
        'features.offline.title': 'Çevrimdışı Erişim',
        'features.offline.description': 'İnternet bağlantısı olmadan bile her yerde pratik yapabilmek için nota kağıtlarını ve ses dosyalarını indirin.',
        'features.traditional.title': 'Geleneksel Bilgelik',
        'features.traditional.description': 'Usta Neyzen Cemil Baştürk\'ün uzmanlığından öğrenin, yüzyıllık müzikal geleneği koruyun.',
        'about.title': 'NeyzenCe Hakkında',
        'download.title': 'NeyzenCe\'yi İndirin',
        'download.subtitle': 'iOS ve Android cihazlarda mevcut',
        'contact.title': 'Bize Ulaşın',
        'contact.developer': 'Geliştirici',
        'contact.content_creator': 'İçerik Oluşturucu',
        'contact.support': 'Destek',
        'about.quote_translation': 'Neyin nasıl şikayet ettiğini dinle, ayrılık hikayelerini anlatıyor.',
        'about.paragraph1': 'Sevgili Ney sevdalıları, NeyzenCe uygulamasını, Ney öğrenmenin zorlu yolculuğunda size göreceli kolaylık sağlama umudıyla hazırladık.',
        'about.paragraph2': 'Unutulmamalıdır ki Ney, en güzel ve doğru haliyle, bir usta öğretmenle çıraklık yaparak öğrenilmelidir. Bizim amacımız sadece çeşitli nedenlerle bu fırsatı bulamayanlara destek olmaktır.',
        'about.paragraph3': 'Nefesiniz "Hû" desin. Saygılarımız, selamlarımız ve sevgimizle.',
        'footer.terms': 'Hizmet Şartları',
        'footer.privacy': 'Gizlilik Politikası',
        'footer.contact': 'İletişim',
        'footer.copyright': '&copy; 2024 NeyzenCe. Tüm hakları saklıdır. Tüm müzikal içerik Neyzen Cemil Baştürk\'e aittir.'
    }
};

// Language switching functionality
let currentLanguage = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update all elements with translation data
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update document language attribute
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navHamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (navHamburger && navMenu) {
        navHamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navHamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navHamburger.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navHamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navHamburger.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for animations
    const animateOnScroll = function() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll('.feature-card, .contact-card, .about-text, .about-image');
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    // Initialize animations if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        animateOnScroll();
    }

    // Handle image loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn, .download-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Handle download button clicks with analytics
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const platform = this.classList.contains('app-store') ? 'iOS' : 'Android';

            // Add loading state
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';

            // Reset after a short delay
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 1000);

            // You can add analytics tracking here
            console.log(`Download initiated for ${platform}`);
        });
    });

    // Add typing effect to hero title (disabled to avoid conflicts with translation)
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const text = heroTitle.innerHTML;
    //     heroTitle.innerHTML = '';
    //     heroTitle.style.opacity = '1';

    //     let i = 0;
    //     const typeWriter = function() {
    //         if (i < text.length) {
    //             heroTitle.innerHTML += text.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 50);
    //         }
    //     };

    //     // Start typing effect after a short delay
    //     setTimeout(typeWriter, 500);
    // }

    // Add parallax effect to hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Add counter animation for statistics (if you add them later)
    const animateCounter = function(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(function() {
            start += increment;
            element.textContent = Math.floor(start);

            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    };

    // Handle form submissions (if you add contact forms later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Add your form handling logic here
            const formData = new FormData(this);
            console.log('Form submitted:', Object.fromEntries(formData));

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navHamburger.classList.remove('active');
        }
    });

    // Add focus management for better accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('.modal'); // If you add modals later

    if (modal) {
        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Add click tracking for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const url = this.href;
            console.log(`External link clicked: ${url}`);
        });
    });

    // Performance optimization: Lazy load non-critical images
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }

    // Add error handling for broken images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Failed to load image:', this.src);
        });
    });

    // Add service worker registration for PWA features (optional)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    }

    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Initialize with saved language or default to English
    switchLanguage(currentLanguage);

    console.log('NeyzenCe website loaded successfully!');
});