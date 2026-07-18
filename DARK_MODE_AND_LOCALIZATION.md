# Dark Mode & Localization Implementation Guide

This document explains how the dark mode and localization features work in the Flamenco Academy website.

## Features

### 🌓 Dark Mode
- **System Preference Detection**: Automatically detects user's OS dark mode preference
- **Manual Override**: Users can choose Light, Dark, or System mode
- **Persistent**: User preference is saved in localStorage
- **Smooth Transitions**: Color changes animate smoothly
- **Optimized Colors**: Dark mode uses carefully selected colors for readability

### 🌍 Localization (i18n)
- **Two Languages**: English and Spanish
- **Browser Detection**: Automatically detects browser language
- **Persistent**: User language preference is saved in localStorage
- **Dynamic Translation**: All content updates when language changes
- **Easy to Extend**: Simple JSON structure for adding new languages

## File Structure

```
├── theme-manager.js          # Dark mode logic & system preference handling
├── i18n-manager.js           # Localization logic & translation management
├── controls.js               # UI controls for theme & language switching
├── theme.css                 # CSS variables & dark mode styles
├── translations.json         # Translation strings for all languages
├── index.html                # Home page (updated with scripts)
├── checkout.html             # Checkout page (updated with scripts)
├── catalogo.html             # Catalog page (updated with scripts)
└── contacto.html             # Contact page (updated with scripts)
```

## How It Works

### Theme Management (theme-manager.js)

**Key Features:**
- Detects system preference via `prefers-color-scheme` media query
- Stores user preference in localStorage
- Listens for system preference changes
- Updates document `data-theme` attribute
- Applies smooth transitions with CSS classes

**Usage:**
```javascript
// Set theme
window.ThemeManager.setTheme('dark');
window.ThemeManager.setTheme('light');
window.ThemeManager.setTheme('system');

// Get current theme
const currentTheme = window.ThemeManager.getCurrentTheme();

// Get current preference (including 'system')
const preference = window.ThemeManager.getPreference();
```

**Events:**
- `themechange`: Fired when theme preference changes
- `systemthemechange`: Fired when system theme changes

### Localization Management (i18n-manager.js)

**Key Features:**
- Loads translations from `translations.json`
- Detects browser language automatically
- Stores user language preference in localStorage
- Updates all elements with `data-i18n` attributes
- Supports parameter substitution in translations

**Usage:**
```javascript
// Set language
window.I18n.setLanguage('en');
window.I18n.setLanguage('es');

// Get translation
const text = window.I18n.t('hero.title');

// Get translation with parameters
const text = window.I18n.t('greeting', { name: 'John' });

// Get current language
const lang = window.I18n.getCurrentLanguage();

// Get supported languages
const langs = window.I18n.getSupportedLanguages();
```

**Events:**
- `languagechange`: Fired when language changes

### UI Controls (controls.js)

**Features:**
- Creates theme switcher buttons (Light, Dark, System)
- Creates language switcher buttons (English, Español)
- Automatically updates button states when theme/language changes
- Responds to page translation updates

**Auto-Integration:**
Controls are automatically added to the first `header`, `nav`, or `.nav-bar` element found.

## Adding Translations

### Method 1: Using translations.json

Edit `translations.json`:

```json
{
  "en": {
    "key.name": "English text"
  },
  "es": {
    "key.name": "Spanish text"
  }
}
```

### Method 2: Using data-i18n attributes

In HTML:
```html
<h1 data-i18n="hero.title"></h1>
<button data-i18n="hero.button">Explore</button>
<input placeholder="Enter name" data-i18n-attr='{"placeholder":"form.name.placeholder"}'>
```

The text content will be automatically updated when:
1. Page loads
2. Language changes

### Method 3: Programmatically

```javascript
document.querySelector('h1').textContent = window.I18n.t('hero.title');
```

## Adding Dark Mode Support

### CSS Variables

The theme system uses CSS custom properties. Define colors in `:root` and `[data-theme="dark"]`:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

All variables in `theme.css` are available globally:
- `--bg-clay`: Main background
- `--terra-cotta`: Primary accent
- `--pastel-orange`: Secondary accent
- `--charcoal`: Text/dark colors
- `--white`: Light/background
- `--border-color`: Borders
- `--text-secondary`: Secondary text
- `--shadow-light`: Light shadows
- `--shadow-medium`: Medium shadows

### Transitions

To enable smooth color transitions:

```css
html.theme-transition,
html.theme-transition *,
html.theme-transition *:before,
html.theme-transition *:after {
  transition: background-color 0.35s ease, color 0.35s ease !important;
}
```

## User Preferences Storage

### localStorage Keys

- `theme-preference`: Stores 'light', 'dark', or 'system'
- `language-preference`: Stores 'en' or 'es'

### Retrieving Saved Preferences

```javascript
const savedTheme = localStorage.getItem('theme-preference');
const savedLang = localStorage.getItem('language-preference');
```

## Browser Compatibility

### Dark Mode
- ✅ Chrome 76+
- ✅ Firefox 67+
- ✅ Safari 12.1+
- ✅ Edge 79+
- ⚠️ Fallback for older browsers (defaults to light mode)

### localStorage
- ✅ All modern browsers
- ✅ Mobile Safari
- ✅ Chrome Mobile
- ✅ Firefox Mobile

## Extending the System

### Adding a New Language

1. Add translations to `translations.json`:

```json
{
  "fr": {
    "nav.home": "Accueil",
    "nav.catalog": "Catalogue",
    ...
  }
}
```

2. Update `SUPPORTED_LANGUAGES` in `i18n-manager.js`:

```javascript
this.SUPPORTED_LANGUAGES = ['en', 'es', 'fr'];
```

### Adding New Theme Options

Edit the theme array in `controls.js`:

```javascript
const themes = ['light', 'dark', 'system', 'auto-high-contrast'];
```

Then add corresponding CSS:

```css
[data-theme="auto-high-contrast"] {
  --bg-clay: #000000;
  --charcoal: #FFFFFF;
  ...
}
```

## Testing

### Test Dark Mode
1. Open DevTools (F12)
2. Go to Settings > Experiments > Enable "Emulate CSS media feature prefers-color-scheme"
3. Select "prefers-color-scheme: dark"

### Test Language Switching
1. Click language buttons in the UI
2. Verify text updates immediately
3. Refresh page - language should persist

### Test Persistence
1. Set preferences (theme + language)
2. Close and reopen the page
3. Verify preferences are restored

## Troubleshooting

### Colors not changing in dark mode?
- Check that `theme.css` is loaded before page styles
- Ensure HTML elements use CSS variables defined in `theme.css`
- Check browser DevTools for CSS variable values

### Translations not loading?
- Verify `translations.json` path is correct
- Check browser console for fetch errors
- Ensure JSON syntax is valid

### Controls not appearing?
- Check that `nav-bar`, `header`, or `nav` element exists in HTML
- Verify all three manager scripts are loaded
- Check browser console for JavaScript errors

### Theme not persisting?
- Check that localStorage is enabled
- Look for privacy settings limiting storage
- Try clearing cache and retesting

## Performance Considerations

- **Lazy Loading**: Translations loaded asynchronously
- **Minimal CSS**: Only necessary variables and rules included
- **No Polyfills**: Uses native browser APIs
- **Efficient Updates**: Only visible elements are updated
- **Smooth Animations**: GPU-accelerated transitions

## Accessibility

- ✅ Respects user's OS preference (WCAG 2.1 Level AAA)
- ✅ High contrast in both modes
- ✅ Clear visual indicators for controls
- ✅ Keyboard accessible controls
- ✅ No flashing or rapid changes

## Future Enhancements

Possible additions:
- [ ] RTL language support (Arabic, Hebrew)
- [ ] High contrast mode
- [ ] Custom color schemes
- [ ] Language auto-detection improvements
- [ ] Translation management UI
- [ ] Theme scheduling (light during day, dark at night)

---

**Last Updated:** July 2024
**Version:** 1.0
**License:** MIT
