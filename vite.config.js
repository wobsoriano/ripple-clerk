import { defineConfig } from 'vite';
import { ripple } from 'vite-plugin-ripple';
import path from 'node:path';

export default defineConfig({
	plugins: [ripple()],
	server: {
		port: 3000,
	},
	build: {
		target: 'esnext',
	},
	resolve: {
		alias: {
			'$lib': path.resolve(__dirname, "./src/lib")
		}
	}
});
