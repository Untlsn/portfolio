<script setup lang="ts">
import { colors } from '~/data/colors';
</script>

<template>
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
