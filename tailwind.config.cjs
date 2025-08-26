/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        saffron: {
          50: 'hsl(29, 100%, 97%)',
          100: 'hsl(29, 100%, 92%)',
          200: 'hsl(29, 100%, 84%)',
          300: 'hsl(29, 100%, 77%)',
          400: 'hsl(29, 100%, 70%)',
          500: 'hsl(22, 100%, 59%)',
          600: 'hsl(20, 95%, 49%)',
          700: 'hsl(16, 85%, 40%)',
          800: 'hsl(13, 70%, 32%)',
          900: 'hsl(10, 55%, 26%)',
        },
        sacred: {
          gold: 'hsl(51, 100%, 50%)',
          red: 'hsl(0, 100%, 27%)',
          cream: 'hsl(45, 86%, 94%)',
          brown: 'hsl(25, 47%, 27%)',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
