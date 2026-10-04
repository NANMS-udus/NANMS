import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    sitemap({
      hostname: 'https://nanms-2.vercel.app',

      dynamicRoutes: [
        '/about',
        '/contact',
        '/news',
        '/about',
        '/executives',
        '/patrons-alumni', 
        '/members',
        '/members/login',
        '/members/registeration',
        '/members/dashboard',
        '/members/dashboard/edit-profile',
        '/members/dashboard/announcements',
        '/members/dashboard/study-directory',
        '/members/dashboard/payments',
      ]
    })
  ],
  base: '/',
  server: {
    host: true
  }
})
