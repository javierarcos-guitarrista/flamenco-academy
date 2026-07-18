/**
 * Internationalization (i18n) Manager
 * Supports English and Spanish localization
 */

class I18nManager {
    constructor() {
        this.STORAGE_KEY = 'language-preference';
        this.DEFAULT_LANGUAGE = 'en';
        this.SUPPORTED_LANGUAGES = ['en', 'es'];
        this.translations = {};
        this.currentLanguage = this.DEFAULT_LANGUAGE;
        
        this.init();
    }

    async init() {
        // Load translations
        await this.loadTranslations();
        
        // Set language from storage or detect from browser
        const savedLang = this.getSavedLanguage();
        const langToUse = savedLang || this.detectBrowserLanguage();
        await this.setLanguage(langToUse, false); // false = don't save yet on init
        
        // Expose globally
        window.I18n = this;
    }

    /**
     * Load translation files
     */
    async loadTranslations() {
        try {
            const response = await fetch('./translations.json');
            if (!response.ok) throw new Error('Failed to load translations');
            this.translations = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to inline translations
            this.translations = this.getInlineTranslations();
        }
    }

    /**
     * Inline translations as fallback
     */
    getInlineTranslations() {
        return {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.catalog': 'Catalog',
                'nav.checkout': 'Checkout',
                'nav.contact': 'Contact',
                
                // Language & Theme
                'lang.english': 'English',
                'lang.spanish': 'Español',
                'theme.light': 'Light',
                'theme.dark': 'Dark',
                'theme.system': 'System',
                'theme.label': 'Theme',
                'lang.label': 'Language',
                
                // Home page
                'hero.title': 'Flamenco Academy with Javier Arcos',
                'hero.subtitle': 'Learn the art and passion of flamenco guitar',
                'hero.button': 'Explore Courses',
                
                // Catalog
                'catalog.title': 'Our Courses',
                'catalog.allcourses': 'All Courses',
                
                // Contact
                'contact.title': 'Get in Touch',
                'contact.email': 'Email',
                'contact.message': 'Message',
                'contact.send': 'Send',
                
                // Checkout
                'checkout.title': 'Your Cart',
                'checkout.price': 'Price',
                'checkout.quantity': 'Quantity',
                'checkout.total': 'Total',
                'checkout.buy': 'Complete Purchase',
            },
            es: {
                // Navegación
                'nav.home': 'Inicio',
                'nav.catalog': 'Catálogo',
                'nav.checkout': 'Carrito',
                'nav.contact': 'Contacto',
                
                // Idioma y Tema
                'lang.english': 'English',
                'lang.spanish': 'Español',
                'theme.light': 'Claro',
                'theme.dark': 'Oscuro',
                'theme.system': 'Sistema',
                'theme.label': 'Tema',
                'lang.label': 'Idioma',
                
                // Página de inicio
                'hero.title': 'Academia de Flamenco con Javier Arcos',
                'hero.subtitle': 'Aprende el arte y la pasión de la guitarra flamenca',
                'hero.button': 'Explorar Cursos',
                
                // Catálogo
                'catalog.title': 'Nuestros Cursos',
                'catalog.allcourses': 'Todos los Cursos',
                
                // Contacto
                'contact.title': 'Ponte en Contacto',
                'contact.email': 'Correo Electrónico',
                'contact.message': 'Mensaje',
                'contact.send': 'Enviar',
                
                // Carrito
                'checkout.title': 'Tu Carrito',
                'checkout.price': 'Precio',
                'checkout.quantity': 'Cantidad',
                'checkout.total': 'Total',
                'checkout.buy': 'Completar Compra',
            }
        };
    }

    /**
     * Get saved language preference
     */
    getSavedLanguage() {
        return localStorage.getItem(this.STORAGE_KEY);
    }

    /**
     * Detect browser language
     */
    detectBrowserLanguage() {
        const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
        return this.SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : this.DEFAULT_LANGUAGE;
    }

    /**
     * Set the current language and apply it
     */
    async setLanguage(lang, save = true) {
        if (!this.SUPPORTED_LANGUAGES.includes(lang)) {
            console.warn(`Language "${lang}" not supported. Using default.`);
            lang = this.DEFAULT_LANGUAGE;
        }

        this.currentLanguage = lang;

        if (save) {
            localStorage.setItem(this.STORAGE_KEY, lang);
        }

        // Update document language attribute
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-language', lang);

        // Update all translatable elements
        this.updatePageTranslations();

        // Dispatch event
        window.dispatchEvent(new CustomEvent('languagechange', { 
            detail: { language: lang } 
        }));
    }

    /**
     * Translate a key with optional parameters
     */
    t(key, params = {}) {
        const langTranslations = this.translations[this.currentLanguage] || this.translations[this.DEFAULT_LANGUAGE];
        let text = langTranslations[key] || key;

        // Replace parameters like {param}
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
        });

        return text;
    }

    /**
     * Update all translatable elements on the page
     */
    updatePageTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update attributes (placeholders, aria-labels, etc.)
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrMap = JSON.parse(element.getAttribute('data-i18n-attr'));
            Object.keys(attrMap).forEach(attr => {
                element.setAttribute(attr, this.t(attrMap[attr]));
            });
        });

        // Update page title if it contains a translation key
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.getAttribute('data-i18n')) {
            titleElement.textContent = this.t(titleElement.getAttribute('data-i18n'));
        }
    }

    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Get list of supported languages
     */
    getSupportedLanguages() {
        return this.SUPPORTED_LANGUAGES;
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new I18nManager();
    });
} else {
    new I18nManager();
}
