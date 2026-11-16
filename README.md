# Personal Portfolio

A modern, responsive personal portfolio built with **React, TypeScript, and Tailwind CSS** to showcase my technical skills, development projects, education, and achievements as a Full Stack Developer.

🌐 **Live Website:** [https://sreehari-s-dev.vercel.app](https://sreehari-s-dev.vercel.app)

## Overview

This portfolio is designed to present my development journey, technical capabilities, and practical project experience through a modern and interactive user interface.

It includes a custom terminal-style boot animation, interactive project and skill showcases, light and dark themes, and an EmailJS-powered contact form.

## Features

- **Modern UI:** Clean, responsive portfolio design with a dark and light theme.
- **Terminal Boot Animation:** Custom Linux-style terminal loading sequence displayed during application initialization.
- **Theme Switching:** Toggle between light and dark themes with preference persistence.
- **About Section:** Personal introduction and professional background.
- **Skills Showcase:** Technology-specific skill cards with corresponding logos and descriptions.
- **Projects Showcase:** Display of development projects with technology tags, GitHub repositories, and live demo links.
- **Education & Achievements:** Dedicated sections highlighting academic background and achievements.
- **Contact Form:** EmailJS integration for sending messages directly through the portfolio.
- **Form Validation:** Input validation and submission status feedback.
- **Responsive Layout:** Optimized for mobile, tablet, and desktop screens.
- **Client-side Routing:** Navigation using React Router.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based frontend development |
| TypeScript | Type-safe application development |
| Vite | Development server and build tool |
| Tailwind CSS | Responsive UI styling |
| React Router DOM | Client-side navigation |
| Lucide React | Interface icons |
| React Icons | Technology logos in skill cards |
| EmailJS | Contact form email integration |
| Jest | Unit testing |
| React Testing Library | Component testing |
| Vercel | Application deployment |

## Projects Featured

### 1. Computer Assembly and E-Commerce

A web application for computer component configuration and online parts purchasing.

- **Live Demo:** [View Website](https://bydcomputers.infinityfree.me/)

### 2. LogiNeX – Logistics Management System

A logistics management application developed to manage transportation-related operations.

- **GitHub:** [View Repository](https://github.com/Sreehari-S6/LogiNeX)

### 3. React User Management Dashboard

A React-based dashboard demonstrating user data management, API integration, searching, sorting, filtering, and pagination.

- **GitHub:** [View Repository](https://github.com/Sreehari-S6/User-Management-Dashboard)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sreehari-S6/Personal-Portfolio-2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Personal-Portfolio-2
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables as explained below.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL provided by Vite in your browser.

## Environment Variables

The contact form uses **EmailJS** to send messages without requiring a custom backend server.

Create a `.env.local` file in the project's root directory and configure the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace the placeholder values with your own EmailJS configuration.

**Important:** Never commit `.env.local` or actual credentials to GitHub. Keep environment variables private and configure the required values in your deployment platform.

## Testing

The project uses Jest and React Testing Library for component and application testing.

Run the test suite:

```bash
npm test
```

Generate a production build:

```bash
npm run build
```

## Deployment

The portfolio is deployed using **Vercel**.

**Live Website:** [https://sreehari-s-dev.vercel.app](https://sreehari-s-dev.vercel.app)

Make sure the required EmailJS environment variables are configured in Vercel for the contact form to work in production.

## Author

**Sreehari S.**

- **GitHub:** [Sreehari-S6](https://github.com/Sreehari-S6)
- **Portfolio:** [Visit Website](https://sreehari-s-dev.vercel.app)

---

Built with React, TypeScript, and a passion for web development.