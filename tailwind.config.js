/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "artium-black": "#0F1012",
                "artium-zinc": "#1F2125",
                "artium-gold": "#D4AF37",
                "artium-gold-light": "#F3E5AB",
                "artium-silver": "#C0C0C0",
                "artium-white": "#FAF9F6",

                // Mappings for compatibility/semantics
                "background": "#0F1012",
                "surface": "#1F2125",
                "primary": "#D4AF37",
                "text-main": "#FAF9F6",
                "text-muted": "#9CA3AF"
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "serif": ["Playfair Display", "serif"] // Added for luxury feel headings if needed
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop')", // Luxury interior placeholder
            }
        },
    },
    plugins: [],
}
