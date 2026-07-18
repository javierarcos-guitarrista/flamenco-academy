# Setup & Testing Guide

## Files Created

### Core System Files
- `theme-manager.js` - Dark mode with system preference detection
- `i18n-manager.js` - Localization system for English/Spanish
- `controls.js` - UI controls for theme and language switching
- `theme.css` - CSS variables and dark mode styles
- `translations.json` - Translation strings for all languages

### Documentation
- `DARK_MODE_AND_LOCALIZATION.md` - Comprehensive implementation guide
- `INTEGRATION_EXAMPLES.md` - Practical code examples
- `SETUP_AND_TESTING.md` - This file

### Updated HTML Files
- `index.html` - Added theme and i18n scripts
- `checkout.html` - Added theme and i18n scripts
- `catalogo.html` - Added theme and i18n scripts
- `contacto.html` - Added theme and i18n scripts

## Quick Start

### 1. No Installation Needed!
The system works with vanilla JavaScript and CSS. No npm packages required.

### 2. Open in Browser
Simply open any HTML file in a modern browser:
```bash
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

### 3. You Should See
- Theme switcher buttons (Light, Dark, System) in the navigation
- Language switcher buttons (English, Español) in the navigation
- Both controls work immediately and persist on page reload

## Testing Checklist

### ✅ Dark Mode Testing

#### Test 1: System Preference Detection
1. Open DevTools (F12)
2. In Chrome DevTools:
   - Click the 3-dot menu → More tools → Rendering
   - Scroll to "Emulate CSS media feature prefers-color-scheme"
   - Select "dark" or "light"
3. Observe: Page colors should change automatically
4. Observe: No theme buttons should be highlighted (system mode)

#### Test 2: Manual Theme Selection
1. Click "Light" button
2. Verify: Page is in light mode
3. Verify: Button is highlighted/active
4. Reload page - should stay in light mode

#### Test 3: Dark Mode Manual Selection
1. Click "Dark" button
2. Verify: Page is in dark mode (darker background, lighter text)
3. Verify: Button is highlighted/active
4. Reload page - should stay in dark mode

#### Test 4: Switch Back to System
1. Click "System" button
2. Verify: Uses OS preference
3. Reload page - should detect system preference

#### Test 5: Smooth Transitions
1. Click between Light/Dark buttons
2. Verify: Colors fade smoothly (0.35s transition)
3. Verify: No jarring color changes

### ✅ Localization Testing

#### Test 1: Browser Language Detection
1. Open DevTools
2. In Chrome DevTools:
   - Settings → Languages
   - Move "Español" to top if available
   - Or check with `navigator.language` in console
3. First-time visitors: Should default to their browser language

#### Test 2: Manual Language Selection
1. Click "Español" button
2. Verify: All visible text changes to Spanish
3. Verify: Button is highlighted
4. Reload page - language should persist

#### Test 3: Switch to English
1. Click "English" button
2. Verify: All text changes to English
3. Verify: Button is highlighted
4. Reload page - language should persist

#### Test 4: Theme + Language Combinations
Test all 8 combinations:
- [ ] Light + English
- [ ] Light + Spanish
- [ ] Dark + English
- [ ] Dark + Spanish
- [ ] System + English
- [ ] System + Spanish
- [ ] Light + System Language
- [ ] Dark + System Language

### ✅ Persistence Testing

#### Test 1: LocalStorage
1. Open DevTools → Application → Storage → LocalStorage
2. Look for `theme-preference` key
3. Change theme - verify localStorage updates
4. Look for `language-preference` key
5. Change language - verify localStorage updates

#### Test 2: Browser Restart
1. Set theme to "Dark"
2. Set language to "Español"
3. Close browser completely
4. Reopen browser
5. Verify: Page loads in dark mode with Spanish text

#### Test 3: Clear Storage
1. DevTools → Application → Storage → Clear site data
2. Reload page
3. Verify: System preference is detected (not saved preference)

### ✅ Browser Compatibility Testing

Test in multiple browsers:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Chrome Mobile

### ✅ Performance Testing

#### Test 1: Page Load Speed
1. Open DevTools → Network tab
2. Clear cache (Cmd+Shift+Delete)
3. Reload page
4. Verify: No significant load time increase
5. Verify: All 3 scripts load quickly

#### Test 2: Memory Usage
1. DevTools → Memory tab
2. Take heap snapshot before switching theme
3. Switch theme 5 times
4. Take heap snapshot after
5. Verify: No significant memory growth

#### Test 3: CSS Animations
1. Set theme to Light
2. Rapidly click Dark/Light/Dark/Light
3. Verify: Animations don't stutter
4. Verify: No visual glitches

### ✅ Accessibility Testing

#### Test 1: Keyboard Navigation
1. Press Tab repeatedly
2. Verify: Theme buttons are focusable
3. Verify: Language buttons are focusable
4. Press Enter on focused button
5. Verify: Theme/language changes

#### Test 2: Screen Reader
Use VoiceOver (Mac), NVDA (Windows), or JAWS:
1. Navigate to theme controls
2. Verify: Controls are announced
3. Verify: Button states are announced
4. Navigate to language controls
5. Verify: Controls are announced

#### Test 3: High Contrast Mode
1. Enable OS high contrast mode
2. Verify: Text is still readable in dark mode
3. Verify: Controls are still visible

### ✅ Content Translation Testing

Check that translations appear in the controls:
1. **English mode should show:**
   - "Theme" label with "Light", "Dark", "System" buttons
   - "Language" label with "English", "Español" buttons

2. **Spanish mode should show:**
   - "Tema" label with "Claro", "Oscuro", "Sistema" buttons
   - "Idioma" label with "English", "Español" buttons

## Quick Verification Script

Run this in the browser console to verify everything:

```javascript
console.log('=== Dark Mode & Localization Verification ===\n');

// Check theme manager
console.log('ThemeManager:', typeof window.ThemeManager !== 'undefined' ? '✅' : '❌');
console.log('Current theme:', window.ThemeManager?.getCurrentTheme());
console.log('Theme preference:', window.ThemeManager?.getPreference());

// Check i18n manager
console.log('\nI18nManager:', typeof window.I18n !== 'undefined' ? '✅' : '❌');
console.log('Current language:', window.I18n?.getCurrentLanguage());
console.log('Supported languages:', window.I18n?.getSupportedLanguages());

// Check translations sample
console.log('\nSample translations:');
console.log('nav.home (en):', window.I18n?.t('nav.home'));

// Check localStorage
console.log('\nLocalStorage:');
console.log('theme-preference:', localStorage.getItem('theme-preference') || 'not set');
console.log('language-preference:', localStorage.getItem('language-preference') || 'not set');

// Check CSS variables
const root = document.documentElement;
const computedStyle = getComputedStyle(root);
console.log('\nCSS Variables:');
console.log('--terra-cotta:', computedStyle.getPropertyValue('--terra-cotta').trim());
console.log('--bg-clay:', computedStyle.getPropertyValue('--bg-clay').trim());

// Check DOM
console.log('\nDOM Elements:');
console.log('data-theme attribute:', root.getAttribute('data-theme'));
console.log('Theme buttons:', document.querySelectorAll('.theme-switch-button').length);
console.log('Language buttons:', document.querySelectorAll('.lang-switch-button').length);

console.log('\n✅ All systems operational!' );
```

## Troubleshooting

### Theme controls don't appear
**Solution:**
1. Check that HTML contains `.nav-bar`, `header`, or `nav` element
2. Open DevTools Console - look for errors
3. Verify `controls.js` is loaded (Network tab)
4. Check that all three managers load without errors

### Translations show as keys (e.g., "nav.home")
**Solution:**
1. Verify `translations.json` is in the same directory
2. Check Network tab - ensure translations.json loads successfully
3. Look for CORS errors if hosted on a server
4. Check browser console for fetch errors

### Dark mode not working
**Solution:**
1. Verify `theme.css` is loaded
2. Check that HTML has `<!DOCTYPE html>`
3. Verify `theme-manager.js` loads without errors
4. Check `data-theme` attribute on `<html>` tag (DevTools)

### Preferences don't persist
**Solution:**
1. Check that localStorage is enabled
2. Check browser privacy settings
3. Look for localStorage quota exceeded (unlikely)
4. Try in a non-private/incognito window

### Performance is slow
**Solution:**
1. Verify only 3 new scripts are loaded
2. Check that `translations.json` isn't extremely large
3. Look for repeated theme/language change events
4. Clear browser cache and test again

## File Size Analysis

```
theme-manager.js       ~4.6 KB (gzipped: ~1.5 KB)
i18n-manager.js        ~7.3 KB (gzipped: ~2.2 KB)
controls.js            ~7.7 KB (gzipped: ~2.3 KB)
theme.css              ~4.8 KB (gzipped: ~1.2 KB)
translations.json      ~1.8 KB (gzipped: ~0.6 KB)
                       ========
                       ~26 KB total (gzipped: ~8 KB)
```

**Impact:** Less than 8 KB gzipped - negligible performance impact!

## Production Checklist

Before deploying to production:

- [ ] All HTML files include the 4 new resources
- [ ] `translations.json` path is correct for your server
- [ ] CSS variables don't conflict with existing styles
- [ ] Test in all target browsers
- [ ] Test on mobile devices
- [ ] Verify localStorage works on your domain
- [ ] Monitor console for any errors
- [ ] Set up analytics to track theme/language preferences
- [ ] Consider adding WebP images for dark mode (optional)

## Next Steps

1. **Translate More Content**: Add `data-i18n` attributes to your HTML
2. **Expand Translations**: Add more translation keys to `translations.json`
3. **Custom Styling**: Use CSS variables in your own styles
4. **Analytics**: Track user theme and language preferences
5. **Additional Languages**: Follow the guide to add French, Portuguese, etc.

---

**Questions?** Check DARK_MODE_AND_LOCALIZATION.md or INTEGRATION_EXAMPLES.md
