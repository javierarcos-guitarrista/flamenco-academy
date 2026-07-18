/**
 * Theme and Language Controls UI
 * Provides interactive controls for switching theme and language
 */

class ControlsUI {
    constructor(containerSelector = 'header, nav, .nav-bar') {
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

        // Create controls wrapper
        const controlsWrapper = document.createElement('div');
        controlsWrapper.className = 'controls-container';
        controlsWrapper.style.cssText = `
            display: flex;
            gap: 1rem;
            align-items: center;
            flex-wrap: wrap;
            margin-left: auto;
        `;

        // Theme control group
        const themeGroup = this.createThemeControl();
        controlsWrapper.appendChild(themeGroup);

        // Language control group
        const langGroup = this.createLanguageControl();
        controlsWrapper.appendChild(langGroup);

        // Add to container - try to add after nav-links if it exists
        const navLinks = container.querySelector('.nav-links');
        if (navLinks && navLinks.parentElement === container) {
            // Insert after nav-links
            navLinks.parentElement.insertBefore(controlsWrapper, navLinks.nextSibling);
        } else {
            // Otherwise append to container
            container.appendChild(controlsWrapper);
        }
    }

    /**
     * Create theme control UI
     */
    createThemeControl() {
        const group = document.createElement('div');
        group.className = 'control-group';
        group.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';

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
            button.style.cssText = `
                background: transparent;
                border: 1px solid rgba(211, 107, 64, 0.15);
                color: inherit;
                padding: 0.4rem 0.8rem;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                font-weight: 500;
            `;

            // Set active state
            const currentPreference = window.ThemeManager.getPreference();
            if (currentPreference === theme) {
                button.classList.add('active');
                button.style.backgroundColor = 'var(--terra-cotta)';
                button.style.color = 'var(--white)';
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
        group.style.cssText = 'display: flex; gap: 0.5rem; align-items: center;';

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
            button.style.cssText = `
                background: transparent;
                border: 1px solid rgba(211, 107, 64, 0.15);
                color: inherit;
                padding: 0.4rem 0.8rem;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                font-weight: 500;
            `;

            // Set active state
            const currentLang = window.I18n.getCurrentLanguage();
            if (currentLang === lang) {
                button.classList.add('active');
                button.style.backgroundColor = 'var(--terra-cotta)';
                button.style.color = 'var(--white)';
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
                if (isActive) {
                    btn.style.backgroundColor = 'var(--terra-cotta)';
                    btn.style.color = 'var(--white)';
                } else {
                    btn.style.backgroundColor = 'transparent';
                    btn.style.color = 'var(--charcoal)';
                }
            });
        });

        // Update language buttons when language changes
        window.addEventListener('languagechange', (e) => {
            document.querySelectorAll('.lang-switch-button').forEach(btn => {
                const isActive = btn.getAttribute('data-lang') === e.detail.language;
                btn.classList.toggle('active', isActive);
                if (isActive) {
                    btn.style.backgroundColor = 'var(--terra-cotta)';
                    btn.style.color = 'var(--white)';
                } else {
                    btn.style.backgroundColor = 'transparent';
                    btn.style.color = 'var(--charcoal)';
                }
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
