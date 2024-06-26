/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  test: {
    globals: true,
    environment: 'jsdom', // テスト環境をjsdomに設定
    setupFiles: './vitest.setup.ts', // セットアップファイル
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});

