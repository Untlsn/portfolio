<script setup lang="ts">
import hrefs from '~/data/projectsFrontendMentorImagesHref';

defineProps<{ index: number }>();
</script>

<template>
	<li ref="list">
		<a :href="hrefs[index]" target="_blankt">
			<img
				:src="`/screens/frontend-mentor-${index}.png`"
				:alt="`frontend mentor project nr. ${index}`"
				class="min-w-65"
			>
		</a>
	</li>
</template>

<style scoped>

</style>
