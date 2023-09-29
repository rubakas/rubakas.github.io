/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'vt320': {
          'amber': '#ffb000',
          'amber-light': '#ffcc00',
          'green-one': '#33ff00',
          'green-two': '#00ff33',
          'green-three': '#00ff66',
          'grey': '#282828',
        },
      },
      fontFamily: {
        berkeley: ['Berkeley Mono Trial', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

