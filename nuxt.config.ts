// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
				modules: ['@unocss/nuxt', 'radix-vue/nuxt', '@nuxt/eslint'],
				components: {
								dirs: []
				}
})