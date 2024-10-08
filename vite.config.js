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
        animated_clock_1: resolve(__dirname, `05-animated-clock-1/index.html`),
        animated_clock_2: resolve(__dirname, `06-animated-clock-2/index.html`),
        web_audio_api: resolve(__dirname, `07-web-audio/index.html`),
        music_player_project: resolve(__dirname, `08-music-player/index.html`),
        drum_machine_project: resolve(__dirname, `09-drum-machine/index.html`),
        video_api: resolve(__dirname, `10-video-api/index.html`),
        video_player_project: resolve(
          __dirname,
          `11-video-player-project/index.html`
        ),
        speech_synthesis_project: resolve(
          __dirname,
          `12-speech-synthesis/index.html`
        ),
      },
    },
  },
});
