import { defineNuxtConfig } from 'nuxt/config'
import packageJson from './package.json'

type PackageJson = {
    name: string
    version: string
    description: string
}

const pkg: PackageJson = packageJson

export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			htmlAttrs: { lang: 'en' },
			link: [
				{
					href: `https://fonts.googleapis.com`,
					rel: `preconnect`,
				},
				{
					crossorigin: 'anonymous',
					href: `https://fonts.gstatic.com`,
					rel: `preconnect`,
				},
				{
					as: `style`,
					href: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600&family=Roboto:wght@300&display=swap`,
					onload: `this.rel='stylesheet'`,
					rel: `preload`,
				},
			],
			meta: [
				{
					content: pkg.description,
					hid: 'description',
					name: 'description',
				},
				{
					content: '#da532c',
					name: 'msapplication-TileColor',
				},
				{
					content: '#ffffff',
					name: 'theme-color',
				},
			],
			title: `Rich Ayotte`,
		},
	},
	css: ['@/assets/styles/global.scss'],
	devtools: { enabled: false },
	modules: ['@vite-pwa/nuxt'],
	pwa: {
		client: { installPrompt: false },
		devOptions: {
			enabled: true,
			navigateFallbackAllowlist: [/^\/$/],
			suppressWarnings: true,
			type: 'module',
		},
		manifest: {
			icons: [
				{
					sizes: '64x64',
					src: 'pwa-64x64.png',
					type: 'image/png',
				},
				{
					sizes: '192x192',
					src: 'pwa-192x192.png',
					type: 'image/png',
				},
				{
					purpose: 'any',
					sizes: '512x512',
					src: 'pwa-512x512.png',
					type: 'image/png',
				},
				{
					purpose: 'maskable',
					sizes: '512x512',
					src: 'maskable-icon-512x512.png',
					type: 'image/png',
				},
			],
			name: 'Rich Ayotte',
			short_name: 'Rich Ayotte',
			theme_color: '#e36f1e',
		},
		registerType: 'autoUpdate',
		workbox: {
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
			navigateFallback: '/',
		},
	},
})
