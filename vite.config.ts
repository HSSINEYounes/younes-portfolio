import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // AJOUTEZ CETTE LIGNE :
  // Le chemin de base doit correspondre au nom de votre dépôt GitHub (/younes-portfolio/)
  base: '/younes-portfolio/',

  plugins: [react()],
});