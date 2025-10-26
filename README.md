# Vikram Raja - Portfolio Website

A modern, responsive portfolio website built with React and custom CSS showcasing your experience as a Full-Stack AI Engineer.

## 🎨 Features

- **Modern Design**: Clean, professional UI inspired by contemporary portfolio designs
- **Easy Theme Customization**: Change the entire color scheme by modifying a single CSS variable
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading with smooth animations
- **Component-Based Architecture**: Easy to maintain and extend

## 🚀 Quick Start

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Customizing the Theme Color

**This is the best part!** You can change the entire color scheme of the website by modifying just ONE line of code.

1. Open `src/App.css`
2. Find line 2:
```css
--primary-color: #FDB915;
```
3. Change `#FDB915` to any color you like:
   - `#3B82F6` for blue
   - `#10B981` for green
   - `#EF4444` for red
   - `#8B5CF6` for purple
   - Or any hex color code you prefer!

The entire website theme will automatically update!

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Sidebar.jsx     # Sidebar with skills
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── Contact.jsx     # Contact form
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles & theme
│   └── index.js           # React entry point
└── package.json           # Dependencies
```

## ✏️ Customizing Content

### Personal Information

Edit the following files to update your information:

**Sidebar** (`src/components/Sidebar.jsx`):
- Profile name and title
- Contact information
- Skills and proficiency levels
- Social media links

**Hero Section** (`src/components/Hero.jsx`):
- Name and title
- Introduction text
- Stats (years of experience, projects, etc.)

**About Section** (`src/components/About.jsx`):
- Bio and description
- Education details
- Core expertise tags

**Experience** (`src/components/Experience.jsx`):
- Add/edit job positions
- Update descriptions and achievements
- Modify skills tags

**Projects** (`src/components/Projects.jsx`):
- Add/edit project cards
- Update GitHub links
- Modify project descriptions

**Contact** (`src/components/Contact.jsx`):
- Email and phone number
- Social media links
- Contact form settings

## 🎯 Key Customization Points

### Adding a Profile Photo

Replace the placeholder initials in:
- `src/components/Sidebar.jsx` (line ~26)
- `src/components/Hero.jsx` (line ~51)

Change from:
```jsx
<div className="profile-placeholder">VR</div>
```

To:
```jsx
<img src="/path/to/your/photo.jpg" alt="Vikram Raja" />
```

### Modifying Skills

Edit the `skills` object in `src/components/Sidebar.jsx` (starting at line ~7):

```javascript
const skills = {
  "Category Name": [
    { name: "Skill Name", level: 90 },
    // Add more skills...
  ],
  // Add more categories...
};
```

### Adding More Projects

In `src/components/Projects.jsx`, add new objects to the `projects` array:

```javascript
{
  id: 3,
  title: "Your Project Title",
  client: "Client Name",
  period: "Start - End Date",
  description: "Project description...",
  highlights: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2"],
  github: "https://github.com/...",
  icon: "🚀"
}
```

## 🎨 Styling Customization

All CSS is custom-written and uses CSS variables for easy theming. Key style files:

- `App.css`: Global styles and theme variables
- `Sidebar.css`: Sidebar styling
- `Hero.css`: Hero section styling
- `About.css`: About section styling
- `Experience.css`: Experience timeline styling
- `Projects.css`: Projects grid styling
- `Contact.css`: Contact form and footer styling

### CSS Variables

Edit these in `src/App.css` to customize:

```css
:root {
  --primary-color: #FDB915;        /* Main theme color */
  --primary-light: #ffd966;        /* Light variant */
  --primary-dark: #e6a500;         /* Dark variant */
  --text-primary: #2d3748;         /* Main text color */
  --text-secondary: #718096;       /* Secondary text */
  --bg-white: #ffffff;             /* White background */
  --bg-light: #f7fafc;             /* Light background */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🚀 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify/Vercel

Simply connect your GitHub repository and these platforms will automatically build and deploy your site.

## 🔧 Tech Stack

- **React 18** - UI framework
- **Custom CSS** - Styling (no Bootstrap, Tailwind, or other CSS frameworks)
- **CSS Variables** - For theming
- **CSS Grid & Flexbox** - Layout
- **CSS Animations** - Smooth transitions

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Vikram Raja**
- Email: vvraja2301@gmail.com
- LinkedIn: [linkedin.com/in/vikram-raja23](https://www.linkedin.com/in/vikram-raja23/)
- Portfolio: [kaushik0802.github.io](https://kaushik0802.github.io/Kaushik0802/)

---

Built with ❤️ using React and Custom CSS
