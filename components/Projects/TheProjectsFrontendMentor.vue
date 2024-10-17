<script setup lang="ts">
import ProjectsFrontendMentorImage from '~/components/Projects/ProjectsFrontendMentorImage.vue';
</script>

<template>
	<h2 class="text-4 lg:text-6 p-6 text-clip-gradient border-(y white/10)">
		Frontend Mentor
	</h2>
	<ul class="flex items-center gap-2 p-4 w-full autoplay">
		<ProjectsFrontendMentorImage
			v-for="i in 10"
			:key="i"
			:index="i"
		/>
		<ProjectsFrontendMentorImage
			v-for="i in 4"
			:key="i"
			:index="i"
		/>
	</ul>
</template>

<style scoped>
	.autoplay > * {
		animation: autoplay 20s linear infinite;
	}
	.autoplay:hover > * {
		animation-play-state: paused;
	}

	@keyframes autoplay {
		from { translate: 0 }
		to { translate: -168rem 0 }
	}
</style>
