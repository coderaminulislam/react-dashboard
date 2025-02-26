/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-bg": "#F5F7FA",
        "primary-color": "#1814F3",
        "secondary-color": "#16DBCC",
        "heading-color": "#343C6A",
        "text-color": "#718EBF",
        "black-color": "#232323",
        "gray-color": "#B1B1B1",
        "red-color": "#FE5C73",
      },
      fontFamily:{
        'Inter': ['Inter', 'serif' ],
        'Lato': ['Lato', 'serif'],

      },
      container:{
        center: true,
        padding:{
          'xl': '36px',
          '2xl': '36px',
        }
      },
      screens: {
        "sm": '480px',
        "md": '768px',
        "lg": '976px',
        "xl": '1180px',
        "2xl": '1180px'
      },
    
    },
  },
  plugins: [],
}

