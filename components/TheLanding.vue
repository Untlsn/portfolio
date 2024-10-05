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
	<article class="lg:grid-(~ cols-2) justify-between text-5 border-(y white/10)">
		<ul class="list-disc opacity-75 p-8 pl-16 pt-16 lg:space-y-4 border-b lg:border-r border-white/10">
			<li class="empty:hidden">
				<BaseTypingText text="Web desinger" />
			</li>
			<li class="empty:hidden">
				<BaseTypingText text="Web desinger" />
			</li>
			<li class="empty:hidden">
				<BaseTypingText text="FOOS enjoyer" />
			</li>
			<li class="empty:hidden">
				<BaseTypingText text="Father" />
			</li>
		</ul>
		<nav class="relative p-8 opacity-75">
			<h2 class="text-8 h-16">
				Media
			</h2>
			<ul class="pl-4 text-nowrap lg:space-y-4">
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

</style>
