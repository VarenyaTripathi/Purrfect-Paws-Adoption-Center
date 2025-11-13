# Setup Guide - Purrfect Paws Adoption Center

## Quick Start (3 Steps)

### Step 1: Extract Files
Make sure all files are in the correct structure:
```
frontend-cat-adoption/
├── index.html
├── adoption.html
├── form.html
├── about.html
├── contact.html
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
```

### Step 2: Add Images (Optional but Recommended)
The website will work without images, but looks much better with them!

**Option A: Use Your Own Images**
- Add cat photos named `cat1.jpg` through `cat9.jpg` in `assets/images/`
- Add `hero-placeholder.jpg` for the hero section
- Add `team-placeholder.jpg` for team members
- Add `placeholder-cat.jpg` as a fallback

**Option B: Use Placeholder Services**
The images will automatically fallback to show broken image icons, which is fine for testing.

**Option C: Download Free Stock Photos**
Visit these sites and download cat photos:
- https://unsplash.com/s/photos/cat
- https://pexels.com/search/cat/
- https://pixabay.com/images/search/cat/

### Step 3: Open in Browser
Simply double-click `index.html` or open it in your web browser!

## Testing Checklist

✅ **Home Page**
- [ ] Hero section displays
- [ ] Mission cards show correctly
- [ ] "Adopt Now" button works

✅ **Adoption Page**
- [ ] All 9 cats display in grid
- [ ] Search bar filters cats
- [ ] Clicking a cat opens modal
- [ ] Modal "Adopt Me" button works

✅ **Adoption Form**
- [ ] All form fields present
- [ ] Cat dropdown populated
- [ ] Form submission shows thank you message

✅ **About Page**
- [ ] Mission and story sections display
- [ ] Team grid shows 6 members

✅ **Contact Page**
- [ ] Contact form works
- [ ] Contact info displays
- [ ] Map embed shows

✅ **Navigation**
- [ ] All nav links work
- [ ] Active page highlighted
- [ ] Mobile menu works (resize browser)

✅ **Responsive Design**
- [ ] Desktop view (1200px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (480px)

## Customization Guide

### Change Site Name
Search and replace "Purrfect Paws Adoption Center" in all HTML files.

### Update Contact Information
Edit these sections in all HTML files:
- Footer contact info
- Contact page details

### Add/Remove Cats
Edit `assets/js/script.js` - find the `catsData` array and add/remove cat objects.

### Change Colors
Edit `assets/css/style.css` - find the `:root` section and update CSS variables.

### Update Team Members
Edit `about.html` - find the team grid section and modify team cards.

## Troubleshooting

**Problem: Images don't show**
- Check that image files are in `assets/images/` folder
- Check that filenames match exactly (case-sensitive)
- Check browser console for errors (F12)

**Problem: Search doesn't work**
- Check browser console for JavaScript errors (F12)
- Make sure `script.js` is loading correctly

**Problem: Forms don't submit**
- This is normal! Forms show success message without backend
- Check browser console to see form data being logged

**Problem: Mobile menu doesn't work**
- Make sure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page

**Problem: Styles look broken**
- Make sure `style.css` is in `assets/css/` folder
- Check browser console for CSS loading errors
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Browser Developer Tools

Press **F12** to open developer tools:
- **Console**: See JavaScript errors and logs
- **Network**: Check if files are loading
- **Elements**: Inspect HTML and CSS
- **Responsive Design Mode**: Test mobile views

## Next Steps

### For Development
1. Add real cat photos
2. Customize content and colors
3. Update contact information
4. Test on multiple devices

### For Production
1. Optimize images (compress to reduce file size)
2. Consider adding a backend for real form submissions
3. Set up web hosting (GitHub Pages, Netlify, etc.)
4. Add Google Analytics (optional)
5. Test on real mobile devices

## Need Help?

Common issues and solutions:

1. **"Page not found" errors**: Make sure you're opening `index.html` directly, not through a file path
2. **Styles not applying**: Clear browser cache (Ctrl+Shift+Delete)
3. **JavaScript not working**: Check that files aren't blocked by browser security
4. **Images not loading**: Use relative paths, not absolute paths

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Create Netlify account
2. Drag and drop the `frontend-cat-adoption` folder
3. Get instant live URL

### Option 3: Traditional Web Hosting
1. Get hosting account (Bluehost, HostGator, etc.)
2. Upload files via FTP
3. Access via your domain

---

**You're all set! Enjoy your cat adoption website! 🐱**
