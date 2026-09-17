import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// uncomment the line below and set base to '/<repo>/'.
// See README.md for full deployment instructions.
export default defineConfig({
  plugins: [react()],
  // base: '/<repo-name>/',
})
