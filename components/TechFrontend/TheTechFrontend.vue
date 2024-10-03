<script setup lang="ts">
import TechFrontendSlider from '~/components/TechFrontend/TechFrontendSlider.vue';
</script>

<template>
	<article class="mx-8">
		<h2 class="text-12 mb-6">
			Frontend:
		</h2>
		<div class="flex-(~ wrap) justify-between gap-12">
			<TechFrontendSlider
				:data="[
					{ icon: 'i-devicon-solidjs', label: 'solidjs', link: 'https://www.solidjs.com/' },
					{ icon: 'i-devicon-react', label: 'react', link: 'https://react.dev/' },
					{ icon: 'i-devicon-vuejs', label: 'vuejs', link: 'https://vuejs.org/' },
				]"
			>
				Frameworki w jakich pracuje:
			</TechFrontendSlider>
			<TechFrontendSlider
				:data="[
					{ icon: 'i-devicon-vitejs', label: 'vitejs', link: 'https://vite.dev/' },
					{ icon: 'i-devicon-tailwindcss', label: 'tailwind', link: 'https://tailwindcss.com/' },
					{ icon: 'i-devicon-eslint', label: 'eslint', link: 'https://eslint.org/' },
				]"
				reverse
			>
				Dodatkowe technologie:
			</TechFrontendSlider>
		</div>
	</article>
</template>

<style scoped>

</style>
