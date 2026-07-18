/**
 * Theme Manager
 * Handles dark mode with system preference detection
 * Supports: light, dark, system (auto)
 */

class ThemeManager {
    constructor() {
        this.STORAGE_KEY = 'theme-preference';
        this.THEME_ATTRIBUTE = 'data-theme';
        this.TRANSITION_CLASS = 'theme-transition';
        this.init();
    }

    init() {
        // Load saved preference or detect system preference
        const savedTheme = this.getSavedTheme();
        const themeToApply = savedTheme || this.getSystemPreference();
        this.applyTheme(themeToApply);
        
        // Listen for system preference changes
        this.listenToSystemPreferenceChanges();
        
        // Expose global methods for UI controls
        window.ThemeManager = this;
    }

    /**
     * Get the saved theme preference from localStorage
     */
    getSavedTheme() {
        return localStorage.getItem(this.STORAGE_KEY) || null;
    }

    /**
     * Get system preference for dark mode
     */
    getSystemPreference() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    /**
     * Determine current theme (resolved from all sources)
     */
    getCurrentTheme() {
        const saved = this.getSavedTheme();
        if (saved === 'system' || !saved) {
            return this.getSystemPreference();
        }
        return saved;
    }

    /**
     * Apply theme to the document
     */
    applyTheme(theme) {
        // Add transition class for smooth changes
        document.documentElement.classList.add(this.TRANSITION_CLASS);
        
        document.documentElement.setAttribute(this.THEME_ATTRIBUTE, theme);
        
        // Update meta theme-color for mobile browsers
        this.updateMetaThemeColor(theme);
        
        // Remove transition class after animation
        setTimeout(() => {
            document.documentElement.classList.remove(this.TRANSITION_CLASS);
        }, 350);
    }

    /**
     * Set theme preference and apply it
     */
    setTheme(preference) {
        localStorage.setItem(this.STORAGE_KEY, preference);
        
        let themeToApply = preference;
        if (preference === 'system') {
            themeToApply = this.getSystemPreference();
        }
        
        this.applyTheme(themeToApply);
        
        // Trigger custom event for UI updates
        window.dispatchEvent(new CustomEvent('themechange', { 
            detail: { preference, resolved: themeToApply } 
        }));
    }

    /**
     * Update meta theme-color tag for browser UI
     */
    updateMetaThemeColor(theme) {
        const colors = {
            light: '#F9F6F0',
            dark: '#1a1a1a'
        };
        
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = colors[theme] || colors.light;
    }

    /**
     * Listen for changes in system preference
     */
    listenToSystemPreferenceChanges() {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Modern browsers
        if (darkModeQuery.addEventListener) {
            darkModeQuery.addEventListener('change', (e) => {
                const saved = this.getSavedTheme();
                // Only apply if user has chosen 'system' or hasn't chosen
                if (saved === 'system' || !saved) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(newTheme);
                    window.dispatchEvent(new CustomEvent('systemthemechange', { 
                        detail: { theme: newTheme } 
                    }));
                }
            });
        } else if (darkModeQuery.addListener) {
            // Fallback for older browsers
            darkModeQuery.addListener((e) => {
                const saved = this.getSavedTheme();
                if (saved === 'system' || !saved) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(newTheme);
                }
            });
        }
    }

    /**
     * Get current preference (might differ from resolved theme if 'system')
     */
    getPreference() {
        return this.getSavedTheme() || 'system';
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ThemeManager();
    });
} else {
    new ThemeManager();
}
