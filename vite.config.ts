import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({

  plugins: [react(), tsconfigPaths()],
  server: {
    allowedHosts: ['munchi.sk', 'www.munchi.sk', 'localhost']
  },
  build: {
    outDir: 'dist', // default output directory
    sourcemap: false, // disable sourcemaps in production (set to true if needed)
    rollupOptions: {
      // You can add additional Rollup configuration here if needed.
      // For instance, customizing manual chunks for better code-splitting:
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0];
          }
        },
      },
    },
  },
});
