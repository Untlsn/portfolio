<script setup lang="ts">
import BaseTypingText from '~/components/BaseTypingText.vue';
import { createChain } from '~/composables/chainContext';
import TheLandingImage from '~/components/TheLandingImage.vue';

createChain(true);
</script>

<template>
	<div class="mt-40 mb-20 relative gap-20">
		<h1 class="grid-(~ cols-1_1_1 rows-auto-2) max-w-screen gap-6 text-center text-10 lg:text-16">
			<span class="col-start-1 row-start-2 write-vertical-left rotate-180 text-clip-gradient bg-gradient-to-b">
				<BaseTypingText text="Cześć" filled />
			</span>
			<span class="col-start-2 row-start-1 text-clip-gradient">
				<BaseTypingText text="Jestem" filled />
			</span>
			<span class="col-start-3 row-start-2 write-vertical-left text-clip-gradient bg-gradient-to-t">
				<BaseTypingText text="Filip" filled />
			</span>
			<TheLandingImage />
		</h1>
	</div>
	<article class="flex-(~ wrap) children:flex-1 justify-between text-5 border-(y white/10) text-nowrap">
		<ul
			class="list-disc opacity-75 p-8 pt-16 lg:space-y-4 border-(b r white/10)"
		>
			<li class="empty:hidden ml-6 move-from-left">
				Web desinger
			</li>
			<li class="empty:hidden ml-6 move-from-left">
				Web desinger
			</li>
			<li class="empty:hidden ml-6 move-from-left">
				FOOS enjoyer
			</li>
			<li class="empty:hidden ml-6 move-from-left">
				Father
			</li>
		</ul>
		<nav class="relative p-8 opacity-75 move-from-right">
			<h2 class="text-8 h-16">
				Media
			</h2>
			<ul class="pl-4 lg:space-y-4">
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
	</article>
</template>

<style scoped>
.move-from-left, .move-from-right {
	animation: move-from .5s ease-in-out 1s forwards;
	translate: var(--from) 0;
}
.move-from-left { --from: -100vw }
.move-from-right { --from: 100vw }

@keyframes move-from {
	from { translate: var(--from) 0 }
	to { translate: 0 0 }
}
</style>
