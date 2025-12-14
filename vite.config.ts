import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // OPTION 1: Utiliser le chemin absolu avec le nom du dépôt (ce que nous avons fait)
  // base: '/younes-portfolio/', 

  // OPTION 2: ESSAYONS UN CHEMIN RELATIF COMPLET (souvent plus fiable)
  base: './',

  plugins: [react()],
});