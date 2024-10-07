<script setup lang="ts">
import ProjectsScreenshotShow from '~/components/Projects/ProjectsScreenshotShow.vue';
import ProjectsInternalShowcaseCore from '~/components/Projects/ProjectsInternalShowcaseCore.vue';

defineProps<{
	title: string;
	description: string;
	commitment: string;
	time: string;
	skills: string;
	href: string;
	src: string;
}>();
</script>

<template>
	<ProjectsInternalShowcaseCore v-bind="$props">
		<template #title>
			<a
				:href="href"
				target="_blank"
				class="font-bold text-lg underline"
			>{{ title }}</a>
		</template>
		<ProjectsScreenshotShow :src="src" />
	</ProjectsInternalShowcaseCore>
</template>

<style scoped>

</style>
