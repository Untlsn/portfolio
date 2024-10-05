<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheTechFrontend from '~/components/TechFrontend/TheTechFrontend.vue';
import TheLanding from '~/components/TheLanding.vue';
import { colors } from '~/data/colors';
</script>

<template>
	<TheHeader />
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
	<main class="">
		<TheLanding />
		<TheTechFrontend />
	</main>
</template>

<style scoped>
.before-animate-blink::before {
	animation: blink 2s linear infinite;
}

@keyframes blink {
	from { opacity: 0 }
	50% { opacity: 5 }
	to { opacity: 0 }
}
</style>

<style>
body {
	background: #15051C;
	@apply min-h-screen text-white;
}
</style>
