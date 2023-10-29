import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default defineConfig({
	images: ['public/power-button.svg'],
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	preset,
})
