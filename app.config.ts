import UnoCSS from 'unocss/vite'
import { defineConfig } from '@tanstack/solid-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    vite: {
        plugins: [
            UnoCSS(),
            tsConfigPaths({
                projects: ['./tsconfig.json'],
            }),
        ],
    },
})