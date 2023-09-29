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
      fontMetrics: {
        berkeley: {
          capHeight: 680,
          ascent: 956,
          descent: -244,
          lineGap: 0,
          unitsPerEm: 1000,
          xHeight: 522,
          xWidthAvg: 600,
        }
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',

        'berkeley-2-grid': '11.7647px',
        'berkeley-3-grid': '17.6471px',
        'berkeley-4-grid': '23.5294px',
        'berkeley-5-grid': '29.4118px',
        'berkeley-6-grid': '35.2941px',
        'berkeley-7-grid': '41.1765px',
        'berkeley-8-grid': '47.0588px',
        'berkeley-9-grid': '52.9412px',
        'berkeley-10-grid': '58.8235px',
        'berkeley-11-grid': '64.7059px',
        'berkeley-12-grid': '70.5882px',
      },
      lineHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '7.5': '1.875rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '12.5': '3.125rem',
        '13.5': '3.275rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '25': '6.25rem',
      },
      spacing: {
        'unset': 'unset',
        5: '1.25rem',
        8:  '2rem',
        10: '2.5rem',
        '12.5': '3.125rem',
        13: '3.25rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        35: '8.75rem',
        40: '10rem',
        45: '11.25rem',
        50: '12.5rem',
        55: '13.75rem',
        65: '16.25rem',
        68: '17rem',
        76: '19rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-capsize'),
  ],
}

