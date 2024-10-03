<script setup lang="ts">
import { useChain } from '~/composables/chainContext';

const props = defineProps<{
	text: string;
	reverce?: boolean;
}>();

const curText = shallowRef(props.text);

const chainState = useChain();

onMounted(async () => {
	curText.value = '';
	const text = props.text;

	watchEffect(() => {
		if (!chainState.value) return;
		const interval = setInterval(() => {
			const curLen = curText.value.length;
			if (curLen < text.length) {
				curText.value = props.reverce ? text.slice(-curLen - 1) : text.slice(0, curLen + 1);
				return;
			}
			clearInterval(interval);
			chainState.value = true;
		}, 50);
	});
});
</script>

<template>
	{{ curText }}
</template>

<style scoped>

</style>
