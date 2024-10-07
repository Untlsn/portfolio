<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheTechFrontend from '~/components/TechFrontend/TheTechFrontend.vue';
import TheLanding from '~/components/Landing/TheLanding.vue';
import TheBackgroundColors from '~/components/TheBackgroundColors.vue';
import TheProjectsInternal from '~/components/TheProjectsInternal.vue';
</script>

<template>
	<TheHeader />
	<main class="max-w-256 mx-auto lg:border-(1 white/10) rounded overflow-hidden mb-20">
		<TheLanding />
		<TheTechFrontend />
		<h2 class="text-8 lg:text-12 p-6 text-clip-gradient border-(y white/10)">
			Projekty:
		</h2>
		<TheProjectsInternal />
	</main>
	<TheBackgroundColors />
</template>

<style scoped>
</style>

<style>
body {
	@apply font-mono;
	background: #15051C;
	@apply min-h-screen text-white;
}
:where(.text-clip-gradient) {
	@apply block bg-clip-text text-transparent bg-gradient-to-tl from-[#1E88DA] to-[#F4298A]
}
</style>
