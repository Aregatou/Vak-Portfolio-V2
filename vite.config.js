import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
		$components: path.resolve('./src/components'),
		},
	},
	optimizeDeps: {
	  include: ['@splidejs/svelte-splide']
	},
	ssr: {
	  noExternal: ['@splidejs/svelte-splide']
	},
	server: {
		fs: {
		  allow: ['./static/images'],
		},
	  },
});