tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    blue: '#1e40af', // Deep blue
                    light: '#eff6ff',
                    dark: '#1e3a8a',
                    accent: '#2563eb'
                }
            },
            backgroundImage: {
                'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%23f1f5f9\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"
            }
        }
    }
};
