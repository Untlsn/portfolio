<script setup lang="ts">
import useIsVisible from '~/composables/useIsVisible';
import TechFrontendSlider from '~/components/TechFrontend/TechFrontendSlider.vue';

const [target, visible] = useIsVisible();
</script>

<template>
<article ref="target" class="min-h-screen p-12 mt-200 grid-(~ cols-[1fr_auto])">
	<TechFrontendSlider
		:icons="['i-devicon-solidjs', 'i-devicon-react', 'i-devicon-vuejs']"
		:labels="['solidjs', 'react', 'vuejs']"
		:visible="visible"
	/>
	<TechFrontendSlider
		:icons="['i-devicon-vitejs', 'i-devicon-tailwindcss', 'i-devicon-sass', 'i-devicon-eslint']"
		:labels="['vitejs', 'tailwind', 'sass', 'eslint']"
		:visible="visible"
		columns
	/>
</article>
</template>

<style scoped>

</style>