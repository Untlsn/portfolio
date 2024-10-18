<script setup lang="ts">
import BaseTypingText from '~/components/Landing/LandingTypingText.vue';
import { createChain } from '~/composables/chainContext';
import TheLandingImage from '~/components/Landing/TheLandingImage.vue';

createChain(true);
</script>

<template>
	<div class="mt-40 mb-20 relative gap-20">
		<h1 class="grid-(~ cols-1_1_1 rows-auto-3) max-w-screen gap-6 text-center text-10 lg:text-16">
			<BaseTypingText :text="$t('landing.animatedWords.0')" class="col-start-1 row-start-2 write-vertical-left rotate-180 bg-gradient-to-b" />
			<BaseTypingText :text="$t('landing.animatedWords.1')" class="col-start-2 row-start-1" />
			<BaseTypingText :text="$t('landing.animatedWords.2')" class="col-start-3 row-start-2 write-vertical-left bg-gradient-to-t" />
			<TheLandingImage />
			<BaseTypingText :text="$t('landing.animatedWords.3')" class="col-span-3 row-start-3" />
		</h1>
	</div>
	<article class="flex-(~ wrap) children:flex-1 justify-between text-5 border-(y white/10) text-nowrap">
		<ul
			class="list-disc opacity-75 p-8 pt-16 lg:space-y-4 border-(b r white/10)"
			style="--from: -100vw"
		>
			<li
				v-for="it in ['Fullstack Dev', 'Tools maintainer', 'App reviver', 'FOOS enjoyer', 'Father']"
				:key="it"
				class="ml-6 move-from"
			>
				{{ it }}
			</li>
		</ul>
		<nav class="relative p-8 opacity-75 move-from" style="--from: 100vw">
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
.move-from {
	animation: move-from .5s ease-in-out 1s forwards;
	translate: var(--from) 0;
}

@keyframes move-from {
	from { translate: var(--from) 0 }
	to { translate: 0 0 }
}
</style>
