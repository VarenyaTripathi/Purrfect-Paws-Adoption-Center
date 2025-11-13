# Purrfect Paws Adoption Center Website

A fully functional, multi-page frontend website for a Cat Adoption Center. Built with pure HTML5, CSS3, and Vanilla JavaScript - no backend required!

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with soft pastel color palette (beige, orange, brown)
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Search Functionality**: Real-time cat filtering by name, age, or breed with debouncing
- **Modal Popups**: Click on any cat card to view detailed information
- **Forms**: Adoption application and contact forms with validation
- **Mobile Navigation**: Hamburger menu for mobile devices

## 📁 Project Structure

```
frontend-cat-adoption/
├── index.html              # Home page
├── adoption.html           # Cat browsing page
├── form.html              # Adoption application form
├── about.html             # About us page
├── contact.html           # Contact page
├── assets/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── script.js      # All JavaScript functionality
│   └── images/            # Image assets
└── README.md              # This file
```

## 🚀 Getting Started

1. **Download/Clone** this project to your local machine
2. **Add Images**: Place cat images in the `assets/images/` folder:
   - `cat1.jpg` through `cat9.jpg` (for the 9 cats)
   - `hero-placeholder.jpg` (for the hero section)
   - `team-placeholder.jpg` (for team member photos)
   - `placeholder-cat.jpg` (fallback image)
3. **Open** `index.html` in your web browser
4. **Enjoy!** Navigate through the site

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with welcome message
- Brief description of the adoption center
- Mission cards highlighting key values
- Call-to-action button to adoption page

### Adoption Page (`adoption.html`)
- Search bar to filter cats by name, age, or breed
- Grid layout of available cats (3 columns on desktop, 1 on mobile)
- Click any cat card to view detailed information in a modal
- "Adopt" button links to adoption form

### Adoption Form (`form.html`)
- Fields: Name, Email, Phone, Preferred Cat, Message
- Pre-selects cat if coming from modal
- Shows thank-you message on submission (no backend)

### About Us Page (`about.html`)
- Mission statement and shelter story
- Team section with profile cards
- Information about the adoption process

### Contact Page (`contact.html`)
- Contact form (Name, Email, Message)
- Contact information display
- Google Maps embed placeholder
- Operating hours

## 🎯 Key Functionalities

### Search & Filter
- Real-time search with 300ms debounce
- Filters cats by name, age, or breed
- Shows "no results" message when no matches found

### Cat Modal
- Click any cat card to open detailed view
- Shows full description and personality
- Direct link to adoption form with pre-selected cat

### Forms
- Client-side validation
- Success messages after submission
- Form data logged to console (ready for backend integration)

### Responsive Navigation
- Sticky navigation bar
- Hamburger menu on mobile devices
- Active page highlighting

### Smooth Scrolling
- Smooth scroll behavior for anchor links
- Automatic scroll to success messages

## 🎨 Color Palette

- **Primary**: `#e8956f` (Soft Orange)
- **Secondary**: `#8b6f47` (Warm Brown)
- **Accent**: `#f4d9c6` (Light Beige)
- **Background**: `#faf8f5` (Off-white)
- **Text Dark**: `#4a3f35`
- **Text Light**: `#6b5d52`

## 🔧 Customization

### Adding More Cats
Edit the `catsData` array in `assets/js/script.js`:

```javascript
{
    id: 10,
    name: "Your Cat Name",
    age: 2,
    gender: "Male/Female",
    breed: "Breed Name",
    image: "assets/images/cat10.jpg",
    description: "Short description",
    personality: "Detailed personality description"
}
```

### Changing Colors
Update CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* etc. */
}
```

### Modifying Content
All content is in the HTML files - simply edit the text directly!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

- Replace placeholder images with real cat photos for best results
- Update the Google Maps embed URL in `contact.html` with your actual location
- Customize team member information in `about.html`
- Add your actual contact information throughout the site

## 🚀 Future Enhancements

Ready to add a backend? Consider:
- Database integration for cat data
- Real form submissions via email or database
- Admin panel for managing cats
- User accounts and saved favorites
- Adoption application tracking

## 📝 License

This project is free to use and modify for personal or commercial purposes.

## 🤝 Credits

Created as a frontend-only demonstration project for a Cat Adoption Center website.

---

**Enjoy building your cat adoption website! 🐱**
