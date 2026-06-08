import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// 独自ドメイン（k.5micro.net）直下に配信するため base は '/'
export default defineConfig({
    plugins: [react()],
    base: '/',
});
