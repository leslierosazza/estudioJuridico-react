import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Con la siguiente opción activada, se verá el botón de instalación de la PWA cuando estemos en modo desarrollo
      devOptions: {
        enabled: true
      },
      // Con la siguiente opción activada, la aplicación del cliente se actualizará cuando la refresquemos tras haber hecho una nueva subida al servidor web
      workbox: {
            navigateFallbackDenylist: [/asset-manifest\.json$/, /index\.html$/],
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'My App',
        short_name: 'My App',
        description: 'My App description',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
]
})