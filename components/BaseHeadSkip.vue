<script setup lang="ts">
import { useHeadStack } from '~/composables/headSkipStack';

const index = useHeadStack();
</script>

<template>
	<header :id="`head-skip-${index}`" class="text-10 font-bold flex items-center justify-between">
		<h2 class="mr-auto">
			<slot />
		</h2>
		<a :href="`head-skip-${index+1}`" class="text-6 flex items-center gap-2 [&>i]:(transition-transform duration-500 hocus:translate-x-4)">
			Pomiń
			<i class="i-ph-fast-forward" />
		</a>
	</header>
</template>

<style scoped>

</style>