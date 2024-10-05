<script setup lang="ts">
import BaseTypingText from '~/components/BaseTypingText.vue';
import { createChain } from '~/composables/chainContext';

createChain(true);
</script>

<template>
	<article class="mx-8 my-40 justify-between relative gap-20">
		<h1 class="grid-(~ cols-1_1_1 rows-auto-2) gap-6 text-center text-16">
			<span class="col-start-1 row-start-2 write-vertical-left rotate-180 text-clip-gradient bg-gradient-to-b">
				<BaseTypingText text="Cześć" filled />
			</span>
			<span class="col-start-2 row-start-1 text-clip-gradient">
				<BaseTypingText text="Jestem" filled />
			</span>
			<span class="col-start-3 row-start-2 write-vertical-left text-clip-gradient bg-gradient-to-t">
				<BaseTypingText text="Filip" filled />
			</span>
			<img
				src="/logo-color.svg"
				alt="logo"
				class="col-start-2 row-start-2 m-auto"
			>
		</h1>
		<!--		<h1 class="text-16 lg:text-32 w-min relative pr-28 lg:ml-40 grid-(~ cols-auto-2)"> -->
		<!--			<span class="block bg-clip-text text-transparent bg-gradient-to-rb from-[#1E88DA] to-[#F4298A]"> -->
		<!--				<BaseTypeingText text="Cześć" filled /> -->
		<!--			</span> -->
		<!--			<span class="row-span-2 block w-max bg-clip-text text-transparent bg-gradient-to-rt from-[#1E88DA] to-[#F4298A] write-vertical-right"> -->
		<!--				<BaseTypeingText text="Tutaj" filled /> -->
		<!--			</span> -->
		<!--			<i class="i-ph-caret-right-bold absolute bottom-2 -left-4 blinking bg-gradient-to-rb from-[#1E88DA] to-[#F4298A]" /> -->
		<!--			<span -->
		<!--				class="text-end relative block bg-clip-text text-transparent bg-gradient-to-rb from-[#1E88DA] to-[#F4298A]" -->
		<!--			> -->
		<!--				<BaseTypeingText text="Filip" filled reverce /> -->
		<!--			</span> -->
		<!--		</h1> -->
		<!--		<ul class="list-disc text-6 lg:text-9 pl-6"> -->
		<!--			<li class="empty:hidden"> -->
		<!--				<BaseTypingText text="Web desinger" /> -->
		<!--			</li> -->
		<!--			<li class="empty:hidden"> -->
		<!--				<BaseTypingText text="Web desinger" /> -->
		<!--			</li> -->
		<!--			<li class="empty:hidden"> -->
		<!--				<BaseTypingText text="FOOS enjoyer" /> -->
		<!--			</li> -->
		<!--			<li class="empty:hidden"> -->
		<!--				<BaseTypingText text="Father" /> -->
		<!--			</li> -->
		<!--		</ul> -->
		<!--		<nav class="show-from-right relative lg:text-8 ml-auto"> -->
		<!--			<h2 class="text-2em"> -->
		<!--				Media -->
		<!--			</h2> -->
		<!--			<ul class="pl-4 text-1em leading-6 text-nowrap lg:space-y-4"> -->
		<!--				<li class="before:(c_ i-line-md-github)"> -->
		<!--					<a href="https://github.com/untlsn" target="_blank"> -->
		<!--						Github -->
		<!--					</a> -->
		<!--				</li> -->
		<!--				<li class="before:(c_ i-simple-icons-exercism)"> -->
		<!--					<a href="https://exercism.org/profiles/Untlsn" target="_blank"> -->
		<!--						Exercism -->
		<!--					</a> -->
		<!--				</li> -->
		<!--				<li class="before:(c_ i-simple-icons-freelancer)"> -->
		<!--					<a href="https://www.freelancer.com/u/Untlsn" target="_blank"> -->
		<!--						Freelancer -->
		<!--					</a> -->
		<!--				</li> -->
		<!--				<li class="before:(c_ i-simple-icons-upwork)"> -->
		<!--					<a href="https://www.upwork.com/freelancers/~01c55b178beb0df537?viewMode=1" target="_blank"> -->
		<!--						Upwork -->
		<!--					</a> -->
		<!--				</li> -->
		<!--			</ul> -->
		<!--		</nav> -->
	</article>
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
