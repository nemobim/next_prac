import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D8EFF',
        secondary: '#DCEEFF',
        black: '#1A1A1A',
        white: '#fff',
        danger: '#FF4949',
        success: '#13CE66',
        warning: '#FFCC3D',
        info: '#007BFF',
      },
    },
  },
  plugins: [],
}
export default config
