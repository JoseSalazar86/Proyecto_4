import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
        assetFileNames: `[name].[ext]`
      }
    },
    // Configurar MIME manualmente para evitar problemas en GitHub Pages
    server: {
      mimeTypes: {
        'application/javascript': ['js', 'jsx']
      }
    }
  }
});
