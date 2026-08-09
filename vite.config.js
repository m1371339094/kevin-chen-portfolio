import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works whether it's served at the
  // repo root (custom domain / username.github.io) or a subpath
  // (username.github.io/repo-name/) — no need to edit this either way.
  base: './',
})
