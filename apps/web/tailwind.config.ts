import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('../../libs/ui/tailwind.config')],
  content: [
    './app/**/*.{ts,tsx}',
    '../../libs/ui/**/*.{ts,tsx}',
    '!../../**/node_modules/**',
    '!../../node_modules/**',
  ],
}
export default config
