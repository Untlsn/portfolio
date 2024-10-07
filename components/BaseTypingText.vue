<script setup lang="ts">
import { useChainTimeout } from '~/composables/chainContext';

const props = defineProps<{
	text: string;
	reverse?: boolean;
}>();

const chainState = useChainTimeout(50 * props.text.length);
</script>

<template>
	<span class="text-clip-gradient">
		<span
			v-for="(letter, i) in text"
			:key="letter"
			:style="{ '--wait': `${i * 50}ms` }"
			class="invisible"
			:class="chainState && 'show-after'"
		>
			{{ letter }}
		</span>
	</span>
</template>

<style scoped>
.show-after {
	--wait: 0;
	animation: show-after 50ms forwards linear;
	animation-delay: var(--wait);
}

@keyframes show-after {
	from { visibility: hidden }
	to { visibility: visible }
}
</style>
