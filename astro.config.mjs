import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    image: {
        service: passthroughImageService(),
    },
    integrations: [tailwind(), svelte()],
    vite: {
        server: {
            watch: {
                ignored: ['./wordpress/**'],
            },
        },
    },
});