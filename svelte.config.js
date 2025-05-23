import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
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
