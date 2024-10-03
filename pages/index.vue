<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheTechFrontend from '~/components/TechFrontend/TheTechFrontend.vue';
import TheLanding from '~/components/TheLanding.vue';
</script>

<template>
	<TheHeader />
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
