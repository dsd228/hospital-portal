import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hospital-portal/',  // <--- Esto es clave para GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',            // Carpeta de salida
    sourcemap: true,           // Opcional: ayuda a depurar errores en producción
  },
  server: {
    port: 5173,                // Puerto local para dev
  },
  resolve: {
    alias: {
      '@': '/src',             // Alias útil para importar desde src
    },
  },
});
