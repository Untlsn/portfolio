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
		<div ref="target" class="flex " :class="reverse && 'flex-row-reverse'">
			<a
				v-for="(it, i) in props.data"
				:key="it.label"
				class="w-1/5 aspect-square p-2 relative transition-transform duration-1000 data-[visible]:translate-0 cursor-pointer before-label border-(~ transparent) rounded hover:before:(content-[attr(data-label)] absolute inset-0 w-full text-center text-lg capitalize mt-4 -z-1)"
				:class="!i ? 'z-1 bg-[#39163F] box-shadow' : 'border-white/10'"
				:style="{ transform: visible ? '' : `translateX(${reverse ? '' : '-'}${i * 100}%)` }"
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
	box-shadow: 0 0 1rem 0 #7C1148 inset;
}
.before-label:hover::before {
	animation: from-top forwards 1s;
}

@keyframes from-top {
	from { translate: 0 2rem; opacity: .2; }
	to { translate: 0 4rem; }
}
</style>
