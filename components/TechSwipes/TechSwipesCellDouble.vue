<script setup lang="ts">
import TechSwipesCell from '~/components/TechSwipes/TechSwipesCell.vue';

defineProps<{
	prev: string,
	next: [string, string],
	barClass?: string
}>()
</script>

<template>
	<TechSwipesCell :selected="selected == 'react'" @select="selected = 'react'">
		<i class="size-full" :class="prev" />
		<div class="size-full relative -right-12/10 -top-full">
			<i class="size-9/20 absolute top-0 left-0" :class="next[0]" />
			<span class="block rotate-45 w-1 h-full absolute inset-0 mx-auto bg-black"></span>
			<i class="size-9/20 absolute bottom-0 right-0" :class="next[1]" />
		</div>
	</TechSwipesCell>
</template>

<style scoped>

</style>