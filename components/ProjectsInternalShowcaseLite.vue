<script setup lang="ts">
import ProjectsInternalShowcaseCore from '~/components/ProjectsInternalShowcaseCore.vue';

defineProps<{
	title: string;
	description: string;
	commitment: string;
	time: string;
	skills: string;
}>();
</script>

<template>
	<ProjectsInternalShowcaseCore v-bind="$props">
		<template #title>
			<span>{{ title }}</span>
		</template>
		<p class="text-center">
			Brak możliwosci pokazania screenshota
		</p>
	</ProjectsInternalShowcaseCore>
</template>

<style scoped>

</style>
