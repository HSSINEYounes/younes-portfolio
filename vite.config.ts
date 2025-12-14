import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Le nom de votre dépôt GitHub (doit correspondre exactement : younes-portfolio)
const repoName = 'younes-portfolio';

export default defineConfig({
  // Utilisation du nom du dépôt GitHub comme chemin de base
  base: `/${repoName}/`,

  plugins: [react()],
});