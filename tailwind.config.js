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

