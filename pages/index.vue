<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheTechFrontend from '~/components/TechFrontend/TheTechFrontend.vue';
import TheLanding from '~/components/Landing/TheLanding.vue';
import { colors } from '~/data/colors';
</script>

<template>
	<TheHeader />
	<main class="max-w-256 mx-auto lg:border-(1 white/10) rounded overflow-hidden">
		<TheLanding />
		<TheTechFrontend />
	</main>
	<div>
		<div
			v-for="(it, i) in colors"
			:key="i"
			class="absolute left-0 size-0 -z-1"
			:style="{
				'top': `${it.top}px`,
				'left': it.left,
				'box-shadow': `0 0 10rem 12rem hsla(${it.tone},61%,54%,0.25)`,
			}"
		/>
	</div>
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
