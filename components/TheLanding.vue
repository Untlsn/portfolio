<script setup lang="ts">
import BaseTypeingText from '~/components/BaseTypeingText.vue';
import { createChain } from '~/composables/chainContext';

const chain = createChain(true);
</script>

<template>
	<div class="min-h-screen mt-60">
		<article class="flex-(~ wrap) gap-20 items-center mx-1/8">
			<h1 class="text-16 lg:text-24 grid-(~ cols-[1fr_6rem]) w-min">
				<span class="block"><BaseTypeingText start text="Cześć" /></span>
				<span class="block rotate-90 w-8 h-38 -translate-y-12 row-span-2">
					<BaseTypeingText text="Tutaj" />
				</span>
				<span
					class="text-end relative block before:(i-ph-caret-right-bold absolute top-0 -left-4 blinking)"
					:class="chain[2] && 'before:c_'"
				>
					<BaseTypeingText text="Filip" reverce />
				</span>
			</h1>
			<ul class="list-disc text-6 lg:text-9">
				<li class="empty:hidden">
					<BaseTypeingText text="Web desinger" />
				</li>
				<li class="empty:hidden">
					<BaseTypeingText text="Web desinger" />
				</li>
				<li class="empty:hidden">
					<BaseTypeingText text="FOOS enjoyer" />
				</li>
				<li class="empty:hidden">
					<BaseTypeingText text="Father" />
				</li>
			</ul>
		</article>
	</div>
</template>

<style scoped>
.before\:blinking::before {
	animation: blinking .7s infinite steps(2, end);
	opacity: var(--opacity);
}

@keyframes blinking {
	from { --opacity: 0 }
	to { --opacity: 1 }
}
</style>
