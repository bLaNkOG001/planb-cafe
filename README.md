# Plan B Resto Cafe - Premium Restaurant Website

A world-class, luxury restaurant website for **Plan B Resto Cafe** in Visakhapatnam, built with Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js, Framer Motion, and GSAP.

## Features

### Visual Design
- **Dark luxury theme** with gold (#F4C542) and amber (#FF8C42) accents
- **Glassmorphism** effects throughout
- **Noise texture overlay** for premium feel
- **Custom scrollbar** styling
- **Gradient text effects** on headings

### 3D & Animations
- **Three.js** floating food particles in hero section
- **Mouse-reactive** camera movement
- **GSAP ScrollTrigger** animations for all sections
- **Framer Motion** page transitions and interactions
- **Loading screen** with animated progress

### Sections
1. **Loading Screen** - Animated entrance with floating particles
2. **Navigation** - Glassmorphism navbar with active section tracking
3. **Hero** - 3D food particles, gradient text, floating ingredients
4. **About** - Story section with feature cards and statistics
5. **Signature Dishes** - 8 handpicked favorites with ratings
6. **Menu** - Full 100+ item menu with search, filters, and categories
7. **Gallery** - Masonry grid with hover effects
8. **Reviews** - Carousel with 5 testimonials
9. **Reservation** - Full booking form with occasion selection
10. **Contact** - Info cards with Google Maps embed
11. **Footer** - Multi-column with social links

### Menu Categories (100+ Items)
- Plan B Signatures (15 items)
- Burgers (11 items)
- Stuffed Burgers (6 items)
- Sandwiches (8 items)
- Pizza (12 items)
- Pasta (8 items)
- Korean Specials (4 items)
- Chinese Starters (9 items)
- Momos (6 items)
- Fries (9 items)
- Rolls (5 items)
- Fried Rice (7 items)
- Noodles (6 items)
- Biryanis (5 items)
- Beverages (Coffee Frio, Gym Freak, Fresh Juices)
- Waffles (8 items)
- Pancakes (4 items)
- Soups (4 items)
- Salads (4 items)
- Add Ons (6 items)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom with glassmorphism
- **Animations**: Framer Motion + GSAP + ScrollTrigger
- **3D**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd planb-cafe

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The static export will be in the `out/` directory.

## Project Structure

```
planb-cafe/
├── app/
│   ├── components/          # Reusable components
│   │   ├── LoadingScreen.tsx
│   │   └── Navbar.tsx
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SignatureDishes.tsx
│   │   ├── MenuSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ReservationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## Cafe Information

- **Name**: Plan B Resto Cafe
- **Location**: 1-90-15, MVP Sector 5, MVP Colony, Visakhapatnam, Andhra Pradesh 530017
- **Phone**: 072079 12121
- **Hours**: 11:00 AM - 11:00 PM (All Days)
- **Specialties**: Gourmet Burgers, Artisanal Pizza, Korean Ramen, Coffee Frio
- **Features**: Live Music, Game Nights, Birthday Parties, Live Kitchen

## License

This project is created for Plan B Resto Cafe. All rights reserved.

---

**Made with love in Visakhapatnam**
