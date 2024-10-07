<script setup lang="ts">
import useIsVisible from '~/composables/useIsVisible';

const props = defineProps<{
	data: { icon: string; label: string; link: string }[];
	reverse?: boolean;
}>();
const [target, visible] = useIsVisible();
</script>

<template>
	<div class="p-6 border-(b white/10)">
		<h3 class="text-5 font-semibold mb-4">
			<slot />
		</h3>
		<div ref="target" class="flex gap-4" :class="reverse && 'flex-row-reverse'">
			<div class="size-20 p-2 bg-[#39163F] box-shadow rounded-lg absolute z-1" />
			<a
				v-for="(it, i) in props.data"
				:key="it.label"
				class="size-20 p-2 relative transition-transform duration-1000 data-[visible]:translate-0 cursor-pointer before-label border-(~ white/10) rounded hover:before:(content-[attr(data-label)] absolute inset-0 w-full text-center text-lg capitalize mt-4 -z-1)"
				:class="!i && 'z-1'"
				:style="{ transform: visible ? '' : `translateX(${reverse ? '' : '-'}${i * 6}rem)` }"
				:data-visible="visible || undefined"
				:href="it.link"
				:data-label="it.label"
				target="_blank"
			>
				<i :class="it.icon" class="size-full text-transparent">{{ it.label }}</i>
			</a>
		</div>
	</div>
</template>

<style scoped>
.box-shadow {
	box-shadow: 0 0 4rem .5rem #7C1148;
}
.before-label:hover::before {
	animation: from-top forwards 1s;
}
[data-reverce] .before-label:hover::before {
	animation-name: from-right;
}

@keyframes from-top {
	from { translate: 0 2rem; opacity: .2; }
	to { translate: 0 4rem; }
}

@keyframes from-right {
	from { translate: -3rem 0; opacity: .2; }
	to { translate: -6rem 0; }
}
</style>
