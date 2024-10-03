<script setup lang="ts">
import BaseTypeingText from '~/components/BaseTypeingText.vue';
import { createChain } from '~/composables/chainContext';

createChain(true);
</script>

<template>
	<div class="flex mx-8 mt-40 justify-between relative">
		<div class="min-h-screen">
			<article class="flex-(~ wrap) items-center gap-20">
				<h1 class="text-16 lg:text-24 w-min relative pr-28 min-h-38.5">
					<span class="block bg-clip-text text-transparent bg-gradient-to-rb from-[#1E88DA] to-[#F4298A]"><BaseTypeingText start text="Cześć" /></span>
					<span class="absolute -right-16 top-24 block w-64 bg-clip-text text-transparent bg-gradient-to-rt from-[#1E88DA] to-[#F4298A] rotate-90">
						<BaseTypeingText text="Tutaj" />
					</span>
					<i class="i-ph-caret-right-bold absolute bottom-2 -left-4 blinking bg-gradient-to-rb from-[#1E88DA] to-[#F4298A]" />
					<span
						class="text-end relative block bg-clip-text text-transparent bg-gradient-to-rb from-[#1E88DA] to-[#F4298A]"
					>
						<BaseTypeingText text="Filip" reverce />
					</span>
				</h1>
				<ul class="list-disc text-6 lg:text-9 pl-6">
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
		<nav class="show-from-right relative">
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
.blinking {
	animation: blinking .8s 5 steps(2, end);
	opacity: var(--opacity);
}

@keyframes blinking {
	from { --opacity: 0 }
	to { --opacity: 1 }
}
</style>
