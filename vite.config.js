import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
   optimizeDeps: {
      exclude: ['@urql/svelte'],
      include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
   },
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
