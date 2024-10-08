import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
const userConfig = defineConfig({
  plugins: [react(), svgr()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      // scss: {
      //   additionalData: `
      //     @import '@/styles/_mixins.scss';
      //   `,
      // },
    },
  },
  server: {
    proxy: {
      '/dev': {
        target: 'https://trinity.dev.local',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ''),
        secure: false,
        ws: true,
      },
    },
  },

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
export default userConfig;
