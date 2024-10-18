// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@unocss/nuxt', 'radix-vue/nuxt', '@nuxt/eslint', '@nuxtjs/i18n'],
	components: {
		dirs: [],
	},
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
	i18n: {
		strategy: 'prefix_and_default',
		defaultLocale: 'pl',
		locales: [
			{ code: 'pl', language: 'pl-PL' },
			{ code: 'en', language: 'en-US' },
		],
	},
});
