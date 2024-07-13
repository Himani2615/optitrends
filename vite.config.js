import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  define: {
    "process.env": process.env,
    VITE_API_KEY:process.env.VITE_API_KEY,
    VITE_ORGANIZATION_ID:process.env.VITE_ORGANIZATION_KEY,
    VITE_APPID:process.env.VITE_APPID
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.timbu.cloud",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
