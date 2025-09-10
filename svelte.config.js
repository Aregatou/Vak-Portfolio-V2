import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		}
	},
	preprocess: preprocess({
		typescript: {
			tsconfigFile: './tsconfig.json'
		},
		scss: {
			prependData: `@use 'src/styles/variables' as *;`,
			includePaths: ['src/styles']
		}
	})
};

export default config;
