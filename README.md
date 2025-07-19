# Justin Angara's Personal Website

A modern, responsive personal portfolio website built with React, featuring a beautiful vertical scrolling design inspired by HackIllinois with cartoonish artwork and smooth animations. Showcasing expertise in kernel development, reverse engineering, security, and AI integration.

## 🚀 Features

- **Modern Design**: Inspired by HackIllinois with vertical scrolling sections
- **Cartoonish Artwork**: Animated elements and playful visual design
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Scroll-based animations and transitions
- **Component-Based**: Well-organized React components
- **Routing**: Multi-page navigation with React Router
- **Reusable UI**: Custom Button and Card components
- **Professional Content**: Real resume information and projects

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── ui/              # UI components (Button, Card)
│       ├── Button.jsx
│       ├── Button.css
│       ├── Card.jsx
│       └── Card.css
├── pages/               # Page components
│   ├── HomePage.jsx     # Main landing page
│   ├── HomePage.css
│   ├── AboutPage.jsx    # About page with work experience
│   ├── AboutPage.css
│   ├── ProjectsPage.jsx # Projects showcase
│   ├── ProjectsPage.css
│   ├── SkillsPage.jsx   # Skills and expertise
│   ├── SkillsPage.css
│   ├── ContactPage.jsx  # Contact form and info
│   └── ContactPage.css
├── hooks/               # Custom React hooks
│   ├── useScrollPosition.js
│   └── useIntersectionObserver.js
├── utils/               # Utility functions and constants
│   ├── constants.js     # App constants and data
│   └── helpers.js       # Helper functions
├── assets/              # Static assets
├── App.jsx              # Main app component with routing
├── App.css              # App-level styles
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Custom styling with animations
- **JavaScript ES6+** - Modern JavaScript features

## 🎨 Design Features

### Home Page Sections
- **Hero Section**: Animated avatar with floating shapes
- **About Section**: Code elements background with cards
- **Skills Section**: Floating tech bubbles with skill categories
- **Stats Section**: Experience metrics and impact numbers
- **Contact Section**: Animated contact elements

### Components
- **Header**: Fixed navigation with mobile menu
- **Footer**: Social links and site information
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Different styles (default, glass, interactive)

### Animations
- Scroll-based parallax effects
- Floating and bouncing animations
- Smooth transitions and hover effects
- Intersection Observer for scroll animations

## 👨‍💻 About Justin Angara

**Full-Stack & Kernel Developer** with 5+ years of experience and 50+ projects completed. Expertise in:
- **Kernel Development**: Windows kernel drivers, memory protection systems
- **Reverse Engineering**: Process injection, security vulnerability research
- **AI & Automation**: GPT-powered scripts, computer vision applications
- **Full-Stack Development**: React, Flask, RESTful APIs, WebSockets
- **Teaching & Mentoring**: Computer science education and student mentoring

### Education
- **University of Wisconsin-Madison** - Bachelor of Science, Double Major in Computer Science and Economics (Expected May 2027)
- **QuickStart Software Engineering Bootcamp** - Graduated

### Work Experience
- **Independent Software Engineer** - Fortune 500 Wireless Industry Client (May 2025 - Present)
- **Full-Stack Software Engineering Internship** - OpenQQuantify (May 2025 - Present)
- **AI & Prototyping Engineer** - Tech Exploration Lab, UW-Madison (June 2025 - August 2025)
- **Advanced Placement Computer Science Teacher Assistant** - St. Charles East High School (August 2022 - August 2023)
- **Front-End Software Engineering Internship** - Comet (October 2022 - January 2023)

### Featured Projects
- **Kernel-level Windows Game State Analysis & Memory Protection System**
- **Full-stack & Low-level Anti-Cheat for Online Exams**
- **Telecom Data Tools & AI/GPT Integration**
- **AR/CV Vehicle Condition Detection System**

### Impact & Achievements
- **5+ Years** of professional experience
- **50+ Projects** completed across various domains
- **1000+ Students** mentored in computer science
- **100% Client Satisfaction** rate

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Key Features

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active page highlighting

### Animations
- Scroll-triggered animations
- Parallax effects
- Smooth transitions
- Hover interactions

### Performance
- Optimized images and assets
- Lazy loading for components
- Efficient CSS animations
- Minimal JavaScript bundle

## 🔧 Customization

### Colors
Update the color scheme in `src/utils/constants.js`:
```javascript
export const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  // ... more colors
};
```

### Content
- Update personal information in `src/utils/constants.js`
- Modify project data in `src/pages/ProjectsPage.jsx`
- Edit about content in `src/pages/AboutPage.jsx`

### Styling
- Global styles in `src/index.css`
- Component-specific styles in their respective `.css` files
- Utility classes in `src/App.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: justin.angara@gmail.com
- **Phone**: (630) 589-6140
- **Location**: Chicago, IL
- **LinkedIn**: [Justin Angara](https://www.linkedin.com/in/justinangara/)
- **GitHub**: [JustinAngara](https://github.com/JustinAngara)
- **Website**: [Personal Website](https://justinangara.github.io/personal-website/)

---

Built with ❤️ by Justin Angara
