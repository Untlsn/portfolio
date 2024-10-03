<script setup lang="ts">
import BaseTypeingText from '~/components/BaseTypeingText.vue';
import { createChain } from '~/composables/chainContext';

const chain = createChain(true);
</script>

<template>
	<div class="flex mx-20 mt-60 gap-12 justify-between">
		<div class="min-h-screen">
			<article class="flex-(~ wrap) gap-20">
				<h1 class="text-16 lg:text-24 grid-(~ cols-[1fr_6rem]) w-min">
					<span class="block"><BaseTypeingText start text="Cześć" /></span>
					<span class="block rotate-90 w-8 h-38 -translate-y-12 lg:translate-x-8 row-span-2">
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
		<nav class="show-from-right">
			<h2 class="text-8">
				Media
			</h2>
			<ul class="pl-4 text-4 leading-6">
				<li class="before:(c_ i-line-md-github)">
					<a href="https://github.com/untlsn" target="_blank">
						Github
					</a>
				</li>
				<li class="before:(c_ i-simple-icons-exercism)">
					<a href="https://exercism.org/profiles/Untlsn" target="_blank">
						Exercism
					</a>
				</li>
				<li class="before:(c_ i-simple-icons-freelancer)">
					<a href="https://www.freelancer.com/u/Untlsn" target="_blank">
						Freelancer
					</a>
				</li>
				<li class="before:(c_ i-simple-icons-upwork)">
					<a href="https://www.upwork.com/freelancers/~01c55b178beb0df537?viewMode=1" target="_blank">
						Upwork
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style scoped>
.show-from-right {
	animation: show-from-right .5s forwards;
}

@keyframes show-from-right {
	from { translate: 100vw }
}
.before\:blinking::before {
	animation: blinking .8s 4 steps(2, end);
	opacity: var(--opacity);
}

@keyframes blinking {
	from { --opacity: 0 }
	to { --opacity: 1 }
}
</style>
