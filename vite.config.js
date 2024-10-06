import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@", replacement: "/src" },
    ],
  },
  server:{
    host: '0.0.0.0',
    port: 5173,
  }
})
