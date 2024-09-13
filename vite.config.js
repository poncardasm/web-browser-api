import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        geolocation: resolve(__dirname, '01-geolocation/index.html'),
        map_location: resolve(__dirname, `02-map-position/index.html`),
        canvas_api: resolve(__dirname, `03-canvas-api/index.html`),
      },
    },
  },
});
