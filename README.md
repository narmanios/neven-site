# Portfolio Website - Neven Armanios

A clean, minimalist portfolio website showcasing product design and data visualization projects.

## Overview

This is a static website built with HTML, CSS, and JavaScript featuring:

- Responsive grid layout for portfolio items
- Smooth animations and hover effects
- Mobile-friendly design
- Clean, modern aesthetic

## File Structure

```
website/
├── index.html          # Homepage with portfolio grid
├── about.html          # About page with bio
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── images/             # Portfolio images and icons
│   ├── README.md       # Image requirements and guidelines
│   └── linkedin-icon.svg
├── projects/           # Individual portfolio project pages
│   ├── README.md       # Guide for creating project pages
│   ├── project-template.html # Template for new projects
│   └── [project-name].html   # Individual project case studies
└── README.md           # This file
```

## Pages

### Homepage (`index.html`)

The main landing page featuring:

- Portfolio grid with 11 projects
- Hover effects and smooth animations
- Links to individual project case studies
- Contact section with email
- External links to GitHub-hosted projects

### About Page (`about.html`)

Personal bio and background page with:

- Profile photo placeholder
- Three-paragraph bio covering design philosophy, career evolution, and approach
- Consistent header and footer

### Project Pages (`projects/*.html`)

Individual case study pages using a consistent template:

- Project overview and context
- Challenge definition
- Design approach and solution
- Results and impact
- Visual storytelling with placeholder images
- Project navigation

## Setup

1. **Add Your Images**: Place your portfolio project images in the `images/` directory. See `images/README.md` for the list of required images.

2. **Open in Browser**: Simply open `index.html` in a web browser to view the site locally.

3. **Create Project Pages**:
   - Navigate to the `projects/` folder
   - Copy `project-template.html` for each portfolio item
   - Fill in your project case study content
   - See `projects/README.md` for detailed instructions

4. **Customize Content**: Edit the HTML files to update:
   - Portfolio project links
   - Project descriptions and case studies
   - Contact information
   - Social media links
   - About page content and photo

## Features

### Responsive Design

- Desktop: Multi-column grid layout
- Tablet: Adjusted grid for medium screens
- Mobile: Single column layout with optimized spacing

### Interactive Elements

- Hover effects on portfolio items
- Smooth scroll animations
- Lazy loading for images (placeholder for future optimization)
- Work toggle button (expandable for filtering)

### Performance

- Optimized CSS with CSS variables
- Smooth transitions and animations
- Intersection Observer for scroll animations

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
  --primary-bg: #ffffff;
  --text-color: #000000;
  --text-secondary: #666666;
  --hover-color: #333333;
  --border-color: #e5e5e5;
}
```

### Typography

Change font family in the `body` selector in `styles.css`.

### Layout

Adjust grid columns and spacing in the `.portfolio-grid` class.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To deploy this website:

1. **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Deploy via Vercel CLI or web interface
4. **Traditional Hosting**: Upload files via FTP to your web host

## License

This is a personal portfolio website template. Feel free to customize for your own use.
