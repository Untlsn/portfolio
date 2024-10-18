<script setup lang="ts">
import TechFrontendSlider from '~/components/TechFrontend/TechFrontendSlider.vue';
</script>

<template>
	<article class="">
		<h2 class="text-8 lg:text-12 m-6 text-clip-gradient">
			Frontend:
		</h2>
		<div class="flex-(~ wrap) children:flex-1 justify-between border-(y white/10)">
			<TechFrontendSlider
				class="border-(b r white/10)"
				:data="[
					{ icon: 'i-devicon-solidjs', label: 'solidjs', link: 'https://www.solidjs.com/' },
					{ icon: 'i-devicon-react', label: 'react', link: 'https://react.dev/' },
					{ icon: 'i-devicon-vuejs', label: 'vuejs', link: 'https://vuejs.org/' },
					{ icon: 'i-devicon-nestjs', label: 'nestjs', link: 'https://nestjs.com/' },
				]"
			>
				{{ $t('frontend.titles.0') }}:
			</TechFrontendSlider>
			<TechFrontendSlider
				class="text-right"
				:data="[
					{ icon: 'i-devicon-vitejs', label: 'vitejs', link: 'https://vite.dev/' },
					{ icon: 'i-devicon-tailwindcss', label: 'tailwind', link: 'https://tailwindcss.com/' },
					{ icon: 'i-my-chartjs', label: 'chartjs', link: 'https://www.chartjs.org/' },
					{ icon: 'i-my-leaflet', label: 'leaflet', link: 'https://leafletjs.com/' },
				]"
				reverse
			>
				{{ $t('frontend.titles.1') }}:
			</TechFrontendSlider>
		</div>
		<section class="m-6 space-y-4">
			<p>{{ $t('frontend.description.0') }}:</p>
			<p>{{ $t('frontend.description.1') }}:</p>
		</section>
	</article>
</template>

<style scoped>
</style>
