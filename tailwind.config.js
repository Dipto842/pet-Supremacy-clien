/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
       // ...
        'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    fontFamily:{
      Dosis: ['Dosis', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
]
}

