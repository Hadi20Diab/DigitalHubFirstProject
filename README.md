# E-Sheba - Healthcare Platform

A modern, responsive healthcare platform built with Next.js that connects patients with healthcare providers. Features include doctor search, appointment booking, and comprehensive healthcare services.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme toggle
- **Doctor Search**: Find healthcare providers by name and location
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Theme Support**: Dynamic light/dark mode with persistent user preferences
- **Component-Based Architecture**: Modular, reusable React components
- **Bootstrap Icons**: Comprehensive icon library integration
- **SCSS Styling**: Advanced CSS preprocessing for maintainable styles

## 🚀 Quick Start

### Prerequisites

- Node.js 16.8+ or 18+
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hadi20Diab/DigitalHubFirstProject.git
   cd DigitalHubFirstProject
   ```

2. **Navigate to the app directory**
   ```bash
   cd my-app
   ```

3. **Install dependencies**
   ```bash
   npm ci
   # or
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Custom Port (Optional)

To run on a different port (e.g., 3001):

**Windows PowerShell:**
```powershell
$env:PORT=3001; npm run dev
```

**macOS/Linux:**
```bash
PORT=3001 npm run dev
```

## 📁 Project Structure

```
DigitalHubFirstProject/
├── my-app/                          # Next.js application
│   ├── app/                         # App Router directory
│   │   ├── components/              # Reusable React components
│   │   │   ├── navbar/              # Navigation component
│   │   │   ├── HeroSection/         # Landing page hero
│   │   │   ├── Specialists/         # Doctor specialists section
│   │   │   ├── ChooseUs/            # Why choose us section
│   │   │   ├── OurMembers/          # Team members section
│   │   │   ├── QualityHealth/       # Quality healthcare section
│   │   │   ├── Subscribe/           # Newsletter subscription
│   │   │   └── footer/              # Footer component
│   │   ├── (pages)/                 # Route groups
│   │   │   ├── about/               # About page
│   │   │   └── contact/             # Contact page
│   │   ├── Styles/                  # Global style utilities
│   │   ├── globals.css              # Global styles and CSS variables
│   │   ├── layout.js                # Root layout component
│   │   └── page.js                  # Home page component
│   ├── public/                      # Static assets
│   │   └── assets/                  # Images and media
│   ├── next.config.js               # Next.js configuration
│   └── package.json                 # App dependencies
├── vercel.json                      # Vercel deployment config
├── package.json                     # Root package configuration
└── README.md                        # Project documentation
```

## 🛠️ Available Scripts

In the `my-app` directory, you can run:

- **`npm run dev`** - Starts development server
- **`npm run build`** - Creates production build
- **`npm run start`** - Starts production server (requires build first)
- **`npm run lint`** - Runs ESLint for code quality

From the root directory:

- **`npm run dev`** - Runs development server in my-app
- **`npm run build`** - Builds the application for production
- **`npm start`** - Starts production server

## 🎨 Theme System

The application includes a sophisticated theming system:

### CSS Variables
```css
:root {
  --primary-color: #0360D9;
  --secondary-color: #E1EEFF;
  --primary-text-color: #171717;
  --secondary-text-color: #FFFFFF;
  --background: #ffffff;
  --foreground: #171717;
  --padding: 8rem;
}
```

### Dark Mode
- Toggle between light and dark themes
- Preferences saved in localStorage
- Automatic system preference detection
- Smooth transitions between themes

### Using Theme Variables
```scss
.component {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--primary-color);
}
```

## 🧩 Key Components

### Navbar
- Responsive navigation with active route highlighting
- Integrated theme toggle
- Mobile-friendly hamburger menu
- Login/Signup action buttons

### HeroSection
- Dynamic search functionality
- Doctor and location selection
- Responsive image positioning
- Feature statistics display

### Search Bar
- Doctor name dropdown selection
- Location-based filtering
- Interactive search button with Bootstrap icons

## 🌐 Deployment

### Vercel (Recommended)

The application is configured for seamless Vercel deployment:

1. **Push to GitHub** (already configured)
2. **Connect to Vercel** - Import your repository
3. **Deploy** - Automatic deployment on git push

**Live Demo**: [https://e-sheba-digitalhub.vercel.app](https://e-sheba-digitalhub.vercel.app)

### Manual Deployment

1. **Build the application**
   ```bash
   cd my-app
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Environment Variables

For production, you may need to set:
- `NODE_ENV=production`
- `PORT=3000` (or your preferred port)

## 🔧 Configuration

### Next.js Configuration (`next.config.js`)
```javascript
module.exports = {
  turbopack: {
    root: '.'
  }
};
```

### Vercel Configuration (`vercel.json`)
```json
{
  "builds": [
    {
      "src": "my-app/next.config.js",
      "use": "@vercel/next"
    }
  ]
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablets
- **Desktop Enhanced**: Rich desktop experience
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Touch Friendly**: Appropriate touch targets and interactions

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Hadi Diab** - Lead Developer
- **Contributors** - Open source community

## 📞 Support

For support and questions:

- **GitHub Issues**: [Create an issue](https://github.com/Hadi20Diab/DigitalHubFirstProject/issues)
- **Documentation**: See this README and code comments
- **Community**: Join our discussions in GitHub Discussions

## 🔄 Version History

- **v1.0.0** - Initial release with core healthcare platform features
- **Latest** - Current development version with theme system and responsive design

---

**Built with ❤️ using Next.js, React, and modern web technologies**