<script setup lang="ts">
import { useChainTimeout } from '~/composables/chainContext';

const chainState = useChainTimeout(500);
</script>

<template>
	<img
		src="/logo-color.svg"
		alt="logo"
		class="col-start-2 row-start-2 m-auto transition-opacity duration-500"
		:class="chainState ? 'opacity-100' : 'opacity-0'"
	>
</template>

<style scoped>

</style>
