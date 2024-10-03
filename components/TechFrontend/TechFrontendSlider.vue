<script setup lang="ts">
const props = defineProps<{
	data: { icon: string; label: string; link: string }[];
	columns?: boolean;
	visible?: boolean;
}>();
</script>

<template>
	<div class="flex gap-4 data-[columns]:flex-col" :data-columns="columns || undefined">
		<div class="size-20 p-2 bg-gray-8 rounded-lg absolute z-1" />
		<a
			v-for="(it, i) in props.data"
			:key="it.label"
			class="size-16 m-2 relative transition-transform duration-1000 data-[visible]:translate-0 cursor-pointer before-label hover:before:(content-[attr(aria-label)] absolute left-0 text-right text-lg capitalize mt-4 -z-1)"
			:class="[it.icon, !i && 'z-1']"
			:style="{ transform: visible ? '' : `translate${columns ? 'Y' : 'X'}(-${i * 6}rem)` }"
			:data-visible="visible || undefined"
			:aria-label="it.label"
			:href="it.link"
			target="_blank"
		/>
	</div>
</template>

<style scoped>
.before-label:hover::before {
	animation: from-top forwards 1s;
}
[data-columns] .before-label:hover::before {
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
