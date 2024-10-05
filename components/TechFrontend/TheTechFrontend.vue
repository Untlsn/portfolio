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
				]"
			>
				Frameworki:
			</TechFrontendSlider>
			<TechFrontendSlider
				class="text-right"
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
		<section class="m-6 space-y-4">
			<p>Frontendem zajmuje się od 2018 roku z czego komercyjnie od 2021. Większość mojej przygody spędziłem pisząc kod w react, ale od 2022 mając większą kontrole nad projektami szala przechyliła się na Vue (to portolio jest napisane w Vue + Nuxt) a w szczegulności SolidJS</p>
			<p>Podobna sytacja jest w przypadku CSS'a którego aktualnie praktycznie wyłącznie pisze z uzyciem tailwind'a bądz unocss (engine css kompatybilny z tailwind)</p>
		</section>
	</article>
</template>

<style scoped>

</style>
