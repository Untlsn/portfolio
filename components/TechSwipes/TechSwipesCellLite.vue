<script setup lang="ts">
import TechSwipesCell from '~/components/TechSwipes/TechSwipesCell.vue';

defineProps<{
	prev: string,
	next: string,
}>()
</script>

<template>
<TechSwipesCell>
	<i class="size-full" :class="prev" />
	<i class="size-full relative -right-12/10 -top-full" :class="next" />
</TechSwipesCell>
</template>

<style scoped>

</style>