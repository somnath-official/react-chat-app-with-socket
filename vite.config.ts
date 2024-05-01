import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@components/*": path.resolve(__dirname, './components'),
      "@guards/*": path.resolve(__dirname, './guards'),
      "@interfaces/*": path.resolve(__dirname, "./interfaces/*"),
      "@pages/*": path.resolve(__dirname, "./pages/*"),
      "@providers/*": path.resolve(__dirname, "./providers/*"),
      "@routes/*": path.resolve(__dirname, "./routes/*"),
      "@scss/*": path.resolve(__dirname, "./scss/*"),
      "@store/*": path.resolve(__dirname, "./store/*"),
    }
  }
})
