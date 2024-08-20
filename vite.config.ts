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
      scss: {
        additionalData: `
          @import '@/styles/_variables.scss';
          @import '@/styles/_mixins.scss';
          @import '@/styles/_colors.scss';
          @import '@/styles/_sizes.scss';
        `,
      },
    },
  },
  server: {
    proxy: {
      '/dev': {
        target: 'https://trinity.eqpls.net',
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
