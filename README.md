# Signature Lab

<div align="center">
  <img src="public/favicon.png" alt="Signature Lab Logo" width="120" height="120" />
  
  **Create professional email signatures in seconds**
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
</div>

---

## 📖 Overview

**Signature Lab** is a modern, user-friendly web application that helps you generate professional HTML email signatures with ease. Built with React, TypeScript, and shadcn/ui components, it provides a clean interface for creating beautiful signatures that work across all major email clients.

### ✨ Key Features

- **🎨 Intuitive Interface**: Clean, modern UI built with shadcn/ui and Tailwind CSS
- **📤 Logo Upload**: Add your company logo to signatures
- **🌓 Dark/Light Preview**: Toggle between themes to see how your signature looks
- **📋 One-Click Copy**: Copy HTML signature directly to clipboard
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **⚡ Real-time Preview**: See your signature update as you type
- **🎯 Minimal Design**: Professional, clean signatures that work everywhere
- **📧 Email Client Ready**: Compatible with Gmail, Outlook, Apple Mail, and more

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdullahhasif/signature-studio.git
   cd signature-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running. 

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run build: dev` | Build with development mode settings |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |

---

## 📂 Project Structure

```
signature-studio/
├── public/              # Static assets
│   └── favicon.png      # App logo/icon
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── SignatureGenerator. tsx  # Main signature generator
│   │   └── InstructionsModal.tsx   # Import instructions modal
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Home page
│   │   └── NotFound.tsx # 404 page
│   ├── test/           # Test files
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── components. json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies
```

---

## 🎯 How to Use

1. **Enter Your Information**
   - Fill in your full name
   - Add your job title (optional)
   - Enter your company name (optional)
   - Add phone number (optional)
   - Include Twitter/X handle (optional)

2. **Upload Logo (Optional)**
   - Click the upload area
   - Select your company logo
   - Preview appears instantly

3. **Preview Your Signature**
   - Toggle between light/dark mode to see appearance
   - Real-time updates as you type

4. **Copy & Use**
   - Click "Copy HTML" button
   - Paste into your email client's signature settings
   - Click "How to import" for detailed instructions

---

## 🧰 Tech Stack

### Core Technologies
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing

### UI & Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set

### State & Data
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Vitest](https://vitest.dev/)** - Unit testing
- **[Testing Library](https://testing-library.com/)** - Component testing

---

## 🎨 Customization

### Modify Signature Template

Edit the `generateSignatureHTML()` function in `src/components/SignatureGenerator.tsx` to customize the signature template:

```typescript
const generateSignatureHTML = () => {
  // Customize your HTML template here
  return `<table>... </table>`;
};
```

### Change Theme

Modify theme colors in `src/index.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* Add more theme variables */
}
```

---

## 🧪 Testing

Run the test suite: 

```bash
npm run test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

---

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Deployment

Deploy to popular platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**:  Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Cloudflare Pages**: Connect to your repository

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abdullah Hasif**

- GitHub: [@abdullahhasif](https://github.com/abdullahhasif)

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities

---

<div align="center">
  Made with ❤️ by Abdullah Hasif
  
  ⭐ Star this repo if you find it helpful! 
</div>
