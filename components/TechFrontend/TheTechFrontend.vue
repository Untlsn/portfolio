<script setup lang="ts">
import useIsVisible from '~/composables/useIsVisible';
import TechFrontendSlider from '~/components/TechFrontend/TechFrontendSlider.vue';

const [target, visible] = useIsVisible();
</script>

<template>
	<article
		ref="target"
		class="p-12"
	>
		<h2 class="text-12 mb-6">
			Frontend:
		</h2>
		<div class="min-h-screen grid-(~ cols-[1fr_auto])">
			<div>
				<h3 class="text-xl font-semibold mb-4">
					Frameworki w jakich pracuje:
				</h3>
				<TechFrontendSlider
					:data="[
						{ icon: 'i-devicon-solidjs', label: 'solidjs', link: 'https://www.solidjs.com/' },
						{ icon: 'i-devicon-react', label: 'react', link: 'https://react.dev/' },
						{ icon: 'i-devicon-vuejs', label: 'vuejs', link: 'https://vuejs.org/' },
					]"
					:visible="visible"
				/>
			</div>
			<div class="relative pt-12">
				<h3 class="text-xl font-semibold absolute top-0 right-0 w-max">
					Dodatkowe technologie:
				</h3>
				<TechFrontendSlider
					:data="[
						{ icon: 'i-devicon-vitejs', label: 'vitejs', link: 'https://vite.dev/' },
						{ icon: 'i-devicon-tailwindcss', label: 'tailwind', link: 'https://tailwindcss.com/' },
						{ icon: 'i-devicon-eslint', label: 'eslint', link: 'https://eslint.org/' },
					]"
					:visible="visible"
					columns
				/>
			</div>
		</div>
	</article>
</template>

<style scoped>

</style>
