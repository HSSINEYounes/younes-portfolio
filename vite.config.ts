import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Le nom de votre dépôt GitHub
const repoName = 'younes-portfolio';

export default defineConfig({
  // Utilisation du nom du dépôt GitHub comme chemin de base
  base: `/${repoName}/`,

  plugins: [react()],
});