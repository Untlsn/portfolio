<script setup lang="ts">
import TechFrontendSlider from '~/components/TechFrontend/TechFrontendSlider.vue';
</script>

<template>
	<article class="m-8">
		<h2 class="text-12 mb-6 text-clip-gradient">
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
		<section class="mt-12 [&>p]:mb-2">
			<p>Frontendem zajmuje się od 2018 roku z czego komercyjnie od 2021. Większość mojej przygody spędziłem pisząc kod w react, ale od 2022 mając większą kontrole nad projektami szala przechyliła się na Vue (to portolio jest napisane w Vue + Nuxt) a w szczegulności SolidJS</p>
			<p>Podobna sytacja jest w przypadku CSS'a którego aktualnie praktycznie wyłącznie pisze z uzyciem tailwind'a bądz unocss (engine css w 100% wstecznie kompatybilny z tailwind)</p>
		</section>
	</article>
</template>

<style scoped>

</style>
