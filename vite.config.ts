import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 独自ドメイン直下に配信するため base は '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});
