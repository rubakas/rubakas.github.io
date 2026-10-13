import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			preprocess: vitePreprocess(),
			// GitHub Pages serves 404.html at whatever address was mistyped, so assets must be absolute
			paths: { relative: false }
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
