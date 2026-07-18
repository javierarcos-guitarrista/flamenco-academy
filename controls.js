/**
 * Theme and Language Controls UI
 * Provides interactive controls for switching theme and language
 */

class ControlsUI {
    constructor(containerSelector = 'nav.nav-bar') {
        this.containerSelector = containerSelector;
        this.init();
    }

    init() {
        // Wait for managers to be ready
        const checkReady = setInterval(() => {
            if (window.ThemeManager && window.I18n) {
                clearInterval(checkReady);
                this.createControls();
                this.attachEventListeners();
            }
        }, 100);
    }

    /**
     * Create the controls UI
     */
    createControls() {
        const container = document.querySelector(this.containerSelector);
        if (!container) {
            console.warn(`Controls container not found: ${this.containerSelector}`);
            return;
        }

        // Check if controls already exist
        if (container.querySelector('.controls-container')) {
            return;
        }

        // Create controls wrapper
        const controlsWrapper = document.createElement('div');
        controlsWrapper.className = 'controls-container';

        // Theme control group
        const themeGroup = this.createThemeControl();
        controlsWrapper.appendChild(themeGroup);

        // Language control group
        const langGroup = this.createLanguageControl();
        controlsWrapper.appendChild(langGroup);

        // Add to container
        container.appendChild(controlsWrapper);
    }

    /**
     * Create theme control UI
     */
    createThemeControl() {
        const group = document.createElement('div');
        group.className = 'control-group';

        const label = document.createElement('span');
        label.className = 'control-label';
        label.setAttribute('data-i18n', 'theme.label');
        label.textContent = window.I18n ? window.I18n.t('theme.label') : 'Theme';

        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'display: flex; gap: 0.25rem;';

        const themes = ['light', 'dark', 'system'];
        themes.forEach(theme => {
            const button = document.createElement('button');
            button.className = 'theme-switch-button';
            button.setAttribute('data-theme', theme);
            button.setAttribute('data-i18n', `theme.${theme}`);
            button.title = `Switch to ${theme} mode`;
            button.textContent = window.I18n ? window.I18n.t(`theme.${theme}`) : theme;

            // Set active state
            const currentPreference = window.ThemeManager.getPreference();
            if (currentPreference === theme) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                window.ThemeManager.setTheme(theme);
            });

            buttonContainer.appendChild(button);
        });

        group.appendChild(label);
        group.appendChild(buttonContainer);
        return group;
    }

    /**
     * Create language control UI
     */
    createLanguageControl() {
        const group = document.createElement('div');
        group.className = 'control-group';

        const label = document.createElement('span');
        label.className = 'control-label';
        label.setAttribute('data-i18n', 'lang.label');
        label.textContent = window.I18n ? window.I18n.t('lang.label') : 'Language';

        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'display: flex; gap: 0.25rem;';

        const languages = window.I18n ? window.I18n.getSupportedLanguages() : ['en', 'es'];
        languages.forEach(lang => {
            const button = document.createElement('button');
            button.className = 'lang-switch-button';
            button.setAttribute('data-lang', lang);
            button.setAttribute('data-i18n', `lang.${lang}`);
            button.textContent = window.I18n ? window.I18n.t(`lang.${lang}`) : lang;

            // Set active state
            const currentLang = window.I18n.getCurrentLanguage();
            if (currentLang === lang) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                window.I18n.setLanguage(lang);
            });

            buttonContainer.appendChild(button);
        });

        group.appendChild(label);
        group.appendChild(buttonContainer);
        return group;
    }

    /**
     * Attach event listeners for theme and language changes
     */
    attachEventListeners() {
        // Update theme buttons when theme changes
        window.addEventListener('themechange', (e) => {
            document.querySelectorAll('.theme-switch-button').forEach(btn => {
                const isActive = btn.getAttribute('data-theme') === e.detail.preference;
                btn.classList.toggle('active', isActive);
            });
        });

        // Update language buttons when language changes
        window.addEventListener('languagechange', (e) => {
            document.querySelectorAll('.lang-switch-button').forEach(btn => {
                const isActive = btn.getAttribute('data-lang') === e.detail.language;
                btn.classList.toggle('active', isActive);
            });
        });
    }
}

// Initialize when managers are available
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ControlsUI();
    });
} else {
    new ControlsUI();
}
