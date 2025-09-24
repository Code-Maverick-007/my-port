# GitHub Portfolio

A modern, responsive portfolio website built with Next.js 13+ and TypeScript, showcasing your skills, projects, and GitHub activity.

## 🚀 Features

- 🎨 Modern and clean design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Next.js 13+ App Router architecture
- 📊 Interactive GitHub contribution graph
- 📚 Skills and certifications showcase
- 📧 Contact form integration
- 🔍 SEO optimized
- 📦 TypeScript for type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API Integration**: GitHub API
- **Package Manager**: pnpm

## 📦 Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd github-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## 📦 Project Structure

```
.
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and shared logic
├── public/             # Static assets
├── styles/             # Global styles and Tailwind configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## 🛠️ Development

### Running the Development Server

```bash
pnpm dev
```

### Building for Production

```bash
pnpm build
```

### Starting the Production Server

```bash
pnpm start
```

## 📝 Customization

1. Update your personal information in the relevant components:
   - `components/about.tsx`
   - `components/skills.tsx`
   - `components/projects.tsx`
   - `components/certifications.tsx`
   - `components/contact.tsx`

2. Customize the design by modifying:
   - `tailwind.config.ts`
   - `styles/globals.css`

3. Update your GitHub username in the contribution graph component:
   - `components/contribution-graph.tsx`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- GitHub Readme Activity Graph for the contribution visualization
- Next.js team for their amazing framework
- All contributors who helped with this project

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Contact

- GitHub: (Code-Maverick-007)
- Email: (omkarshewale205@gmail.com)

---

Made with ❤️ by Omkar

