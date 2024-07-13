import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  
  define: {
    'process.env.VITE_ORGANIZATION_ID': JSON.stringify(process.env.VITE_ORGANIZATION_ID),
    'process.env.VITE_APPID': JSON.stringify(process.env.VITE_APPID),
    'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  }
});
