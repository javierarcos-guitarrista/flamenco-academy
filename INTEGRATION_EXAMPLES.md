# Integration Examples

This document shows practical examples of how to integrate the dark mode and localization system into your existing HTML pages.

## Quick Start

### 1. Add to HTML Head

Already done automatically - the scripts are included in all HTML files:

```html
<link rel="stylesheet" href="./theme.css">
<script src="./theme-manager.js"></script>
<script src="./i18n-manager.js"></script>
<script src="./controls.js"></script>
```

### 2. That's it! The system is ready to use.

The theme and language controls are automatically added to your navigation bar.

## Common Integration Patterns

### Example 1: Translating Navigation Links

**Before (static text):**
```html
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
<a href="/checkout">Checkout</a>
<a href="/contact">Contact</a>
```

**After (with i18n):**
```html
<a href="/" data-i18n="nav.home">Home</a>
<a href="/catalog" data-i18n="nav.catalog">Catalog</a>
<a href="/checkout" data-i18n="nav.checkout">Checkout</a>
<a href="/contact" data-i18n="nav.contact">Contact</a>
```

**Translation needed in translations.json:**
```json
{
  "en": {
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.checkout": "Checkout",
    "nav.contact": "Contact"
  },
  "es": {
    "nav.home": "Inicio",
    "nav.catalog": "Catálogo",
    "nav.checkout": "Carrito",
    "nav.contact": "Contacto"
  }
}
```

### Example 2: Translating Form Inputs

**HTML:**
```html
<form>
  <input 
    type="email" 
    placeholder="Enter your email"
    data-i18n-attr='{"placeholder":"form.email.placeholder"}'
    required
  />
  <textarea 
    placeholder="Your message"
    data-i18n-attr='{"placeholder":"form.message.placeholder"}'
  ></textarea>
  <button type="submit" data-i18n="form.send">Send</button>
</form>
```

**Translations:**
```json
{
  "en": {
    "form.email.placeholder": "Enter your email",
    "form.message.placeholder": "Your message",
    "form.send": "Send"
  },
  "es": {
    "form.email.placeholder": "Ingresa tu correo",
    "form.message.placeholder": "Tu mensaje",
    "form.send": "Enviar"
  }
}
```

### Example 3: Dynamic Content with JavaScript

**HTML:**
```html
<div id="welcome-message"></div>
```

**JavaScript:**
```javascript
// Update when language changes
function updateWelcome() {
  const name = "John";
  const message = window.I18n.t('welcome', { name });
  document.getElementById('welcome-message').textContent = message;
}

// Initial update
updateWelcome();

// Update on language change
window.addEventListener('languagechange', updateWelcome);
```

**Translations:**
```json
{
  "en": {
    "welcome": "Welcome, {name}!"
  },
  "es": {
    "welcome": "¡Bienvenido, {name}!"
  }
}
```

### Example 4: Theme-Aware Images

**HTML with Picture Element:**
```html
<picture>
  <!-- Light mode image -->
  <source 
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" 
    srcset="logo-light.png"
  />
  <!-- Dark mode image -->
  <source 
    media="(prefers-color-scheme: dark)" 
    srcset="logo-dark.png"
  />
  <img src="logo-light.png" alt="Logo" />
</picture>
```

**Or with JavaScript:**
```javascript
function updateImageForTheme() {
  const theme = window.ThemeManager.getCurrentTheme();
  const img = document.getElementById('logo');
  img.src = theme === 'dark' ? 'logo-dark.png' : 'logo-light.png';
}

// Initial update
updateImageForTheme();

// Update on theme change
window.addEventListener('themechange', updateImageForTheme);
```

### Example 5: Custom Dark Mode Styles

**CSS with variables:**
```css
.custom-component {
  background-color: var(--white);
  color: var(--charcoal);
  border: 1px solid var(--border-color);
}

.custom-component:hover {
  background-color: var(--bg-clay-dark);
  box-shadow: 0 10px 30px var(--shadow-light);
}
```

**No additional dark mode CSS needed!** - Variables handle both themes automatically.

### Example 6: Conditional Rendering Based on Language

**JavaScript:**
```javascript
// Show/hide content based on language
function showLanguageSpecificContent() {
  const lang = window.I18n.getCurrentLanguage();
  
  if (lang === 'es') {
    document.getElementById('spanish-only').style.display = 'block';
    document.getElementById('english-only').style.display = 'none';
  } else {
    document.getElementById('spanish-only').style.display = 'none';
    document.getElementById('english-only').style.display = 'block';
  }
}

// Initial update
showLanguageSpecificContent();

// Update on language change
window.addEventListener('languagechange', showLanguageSpecificContent);
```

### Example 7: Tracking User Preferences

**Get current preferences:**
```javascript
// Theme preference
const themePreference = window.ThemeManager.getPreference(); // 'light', 'dark', or 'system'
const resolvedTheme = window.ThemeManager.getCurrentTheme(); // 'light' or 'dark'

// Language preference
const language = window.I18n.getCurrentLanguage(); // 'en' or 'es'

// Send to analytics
analytics.track('preferences', {
  theme: themePreference,
  language: language
});
```

### Example 8: Programmatic Theme Switching

**Toggle Dark Mode:**
```javascript
function toggleDarkMode() {
  const current = window.ThemeManager.getCurrentTheme();
  const newTheme = current === 'dark' ? 'light' : 'dark';
  window.ThemeManager.setTheme(newTheme);
}
```

**Set to System:**
```javascript
window.ThemeManager.setTheme('system');
```

### Example 9: Multi-Language Content Blocks

**HTML:**
```html
<div class="course-card">
  <h3 data-i18n="course.flamenco.title">Flamenco Guitar</h3>
  <p data-i18n="course.flamenco.description">Learn traditional flamenco techniques...</p>
  
  <div class="price">
    <span>$</span>
    <span id="price-value">99</span>
  </div>
  
  <button data-i18n="course.enroll">Enroll Now</button>
</div>
```

**Translations:**
```json
{
  "en": {
    "course.flamenco.title": "Flamenco Guitar",
    "course.flamenco.description": "Learn traditional flamenco techniques from master guitarist Javier Arcos.",
    "course.enroll": "Enroll Now"
  },
  "es": {
    "course.flamenco.title": "Guitarra Flamenca",
    "course.flamenco.description": "Aprende técnicas tradicionales de flamenco del maestro guitarrista Javier Arcos.",
    "course.enroll": "Inscribirse Ahora"
  }
}
```

### Example 10: Fallback for Missing Translations

If a translation key is missing, it falls back to the key itself:

```javascript
window.I18n.t('unknown.key'); // Returns: 'unknown.key'
```

To find missing translations, check the browser console - keys without translations will appear.

## Best Practices

### 1. Use Semantic Key Naming

✅ Good:
```json
{
  "nav.home": "Home",
  "hero.title": "Welcome",
  "form.submit": "Submit"
}
```

❌ Bad:
```json
{
  "text1": "Home",
  "text2": "Welcome",
  "text3": "Submit"
}
```

### 2. Keep Translations Consistent

✅ Good - use the same term throughout:
```json
{
  "nav.cart": "Cart",
  "header.cart": "Cart",
  "button.view_cart": "View Cart"
}
```

❌ Bad - inconsistent terminology:
```json
{
  "nav.cart": "Shopping Bag",
  "header.cart": "Basket",
  "button.view_cart": "See Items"
}
```

### 3. Use CSS Variables for All Theme-Aware Styling

✅ Good:
```css
.button {
  background-color: var(--terra-cotta);
  color: var(--white);
}
```

❌ Bad - hardcoded colors won't work in dark mode:
```css
.button {
  background-color: #D36B40;
  color: #FFFFFF;
}
```

### 4. Test Both Themes and Languages

- Test Light + English
- Test Light + Spanish
- Test Dark + English
- Test Dark + Spanish
- Test System mode

### 5. Consider Context in Translations

Some words have different meanings in different contexts:

```json
{
  "es": {
    "button.accept": "Aceptar",
    "contract.accept": "Aceptar"
  }
}
```

Better:
```json
{
  "es": {
    "button.accept": "Aceptar",
    "dialog.accept": "Aceptar",
    "agreement.accept": "Acepto"
  }
}
```

## Debugging

### Enable Translation Logging

Add this to find missing translations:

```javascript
// Patch the I18n.t method to log missing keys
const originalT = window.I18n.t.bind(window.I18n);
window.I18n.t = function(key, params) {
  const result = originalT(key, params);
  if (result === key) {
    console.warn(`Missing translation: ${key} [${window.I18n.currentLanguage}]`);
  }
  return result;
};
```

### Check Theme Application

```javascript
// Check current theme
console.log('Data-theme:', document.documentElement.getAttribute('data-theme'));
console.log('CSS Color:', getComputedStyle(document.documentElement).getPropertyValue('--terra-cotta'));
```

## Performance Tips

1. **Lazy Load Translations**: Already implemented - loads on page load
2. **Minimize Re-renders**: Only update changed elements
3. **Cache Translations**: Already cached in memory
4. **Use CSS Variables**: Faster than JavaScript style changes

---

**Need Help?** See DARK_MODE_AND_LOCALIZATION.md for detailed documentation.
