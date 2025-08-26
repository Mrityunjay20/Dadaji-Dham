# Dadaji Dham Mandir Website

## Overview

This is a spiritual website for श्री दादाजी धाम मंदिर (Sri Dadaji Dham Mandir), a temple located in Patel Nagar, Bhopal, Madhya Pradesh. The website serves as a digital presence for the temple, providing information about the spiritual guru Sri Dadaji Gurudev (Sankheda Wale), temple details, teachings, and contact information. The site is built as a single-page application with multiple sections showcasing the temple's significance, spiritual teachings, and divine presence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend with the following key architectural decisions:

- **React 18 with TypeScript**: Provides type safety and modern React features
- **Vite Build System**: Chosen for fast development builds and hot module replacement
- **Wouter for Routing**: Lightweight client-side routing solution instead of React Router
- **Single Page Application**: All content is contained within one main page with scrollable sections
- **Component-Based Architecture**: Organized into reusable UI components for different sections (Hero, About, Teachings, Temple, Videos, Contact, Footer)

### UI Framework and Styling
- **shadcn/ui Components**: Modern, accessible component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Custom Design System**: Sacred/spiritual themed color palette with saffron, gold, and cream colors
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Font Awesome Icons**: For spiritual and decorative icons

### Backend Architecture
- **Express.js Server**: RESTful API server with middleware-based architecture
- **Memory Storage Layer**: Abstract storage interface with in-memory implementation for development
- **User Management**: Basic user schema with username/password authentication support
- **Modular Route System**: Separated route registration and storage logic

### Data Management
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL support
- **Zod Validation**: Schema validation for data integrity
- **TanStack Query**: Client-side data fetching, caching, and synchronization
- **Database Schema**: User table with UUID primary keys and unique constraints

### Development and Build Process
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports
- **Vite Development Server**: Hot reload with development middleware
- **esbuild Production Build**: Fast bundling for server-side code
- **Environment-based Configuration**: Separate development and production setups

### Content and Localization
- **Bilingual Content**: Hindi (Devanagari) and English text throughout the application
- **Spiritual Terminology**: Proper Sanskrit/Hindi religious terms and concepts
- **Cultural Sensitivity**: Respectful presentation of religious content and imagery

### External Integrations
- **YouTube Embedding**: Embedded videos for temple tours and teachings
- **Google Fonts**: Custom font loading for typography (Playfair Display, Inter)
- **Unsplash Images**: Placeholder spiritual and temple imagery
- **Social Media Links**: YouTube channel integration for extended content

### Performance Optimizations
- **Code Splitting**: Lazy loading of non-critical components
- **Image Optimization**: Responsive images with proper loading strategies
- **CSS Optimization**: PostCSS with Autoprefixer for browser compatibility
- **Bundle Analysis**: Development tools for performance monitoring

The architecture prioritizes developer experience, performance, and maintainability while ensuring the spiritual and cultural aspects of the temple are respectfully represented in the digital medium.

## External Dependencies

### Database and ORM
- **Neon Database (@neondatabase/serverless)**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Drizzle Kit**: Database migration and schema management tools

### UI and Component Libraries  
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for complex components
- **shadcn/ui**: Pre-built component library based on Radix UI with consistent design system
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for modern, customizable SVG icons
- **Font Awesome**: Icon library for spiritual and decorative icons

### State Management and Data Fetching
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form validation and management with minimal re-renders
- **Hookform Resolvers**: Integration layer between React Hook Form and validation libraries

### Development and Build Tools
- **Vite**: Next-generation frontend build tool with fast HMR
- **TypeScript**: Static type checking for improved developer experience
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS post-processing with Autoprefixer plugin

### Authentication and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **Express Session**: Server-side session management middleware

### Validation and Utilities
- **Zod**: TypeScript-first schema validation library
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx/tailwind-merge**: Conditional CSS class utilities
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Secure, URL-friendly unique string ID generator

### UI Enhancement Libraries
- **cmdk**: Command palette/search interface component
- **embla-carousel-react**: Carousel component for image galleries
- **Vaul**: Drawer/sheet component library for mobile interfaces
- **input-otp**: OTP input component for authentication flows

### Development and Deployment
- **Replit Integration**: Development environment plugins and banner utilities
- **tsx**: TypeScript execution engine for development server
- **Wouter**: Lightweight client-side routing for React applications

The external dependencies are carefully chosen to provide a robust, scalable foundation while maintaining the spiritual and cultural authenticity required for a religious website. The stack emphasizes developer productivity, user experience, and accessibility.