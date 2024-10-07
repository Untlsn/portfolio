<script setup lang="ts">
defineProps<{
	description: string;
	commitment: string;
	time: string;
	skills: string;
}>();
defineSlots<{
	title(): unknown;
	default(): unknown;
}>();
</script>

<template>
	<li class="p-8 border-(t white/10)">
		<h4 class="mb-2">
			<slot name="title" />
			- {{ description }}
		</h4>
		<p class="mt-1">
			<b>Poziom zaangażowania: </b>{{ commitment }}
		</p>
		<p class="mt-1">
			<b>Czas: </b>{{ time }}
		</p>
		<p class="mt-1 mb-4">
			<b>Zdobyte umiejętności: </b> {{ skills }}
		</p>
		<slot name="default" />
	</li>
</template>

<style scoped>

</style>
