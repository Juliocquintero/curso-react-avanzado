import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
	registerType: 'prompt',
	manifest: {
		name: 'Petgram',
		short_name: 'Petgram',
		description: 'Aplicación de fotos de animales domésticos.',
		theme_color: '#0f00ff',
		background_color: '#fff',
		icons: [
			{
				src: '/src/assets/icon.png',
				sizes: [96, 128, 192, 256, 384, 512],
			},
		],
		orientation: 'portrait',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePWA(manifestForPlugin)],
});
