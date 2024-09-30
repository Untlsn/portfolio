<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue';
import TheTechSwipes from '~/components/TechSwipes/TheTechSwipes.vue';
import { createHeadStack } from '~/composables/headSkipStack';
import TheTechTrivia from '~/components/TheTechTrivia.vue';

createHeadStack();
</script>

<template>
	<TheHeader />
	<main v-bind="$attrs">
		<article class="min-h-95vh grid-(~ cols-2) place-items-center mx-1/8">
			<div>
				<h1 class="text-20">
					Cześć.
				</h1>
				<div
						class="border-l-([#C91E7A] 2) pl-12 relative before-animate-blink before:(content-['>'] absolute left-4 top-2 text-[#C91E7A] text-xs scale-y-300 scale-x-150)"
				>
				<p class="my-4">
					Jestem Filip Skoczeń. Mieszkam całe życie w mniejszej wsi w okolicach Nowego Sącza.
					Przygodę z programowaniem zacząłem w połowie technikum (~16 lat)
					chcąc zrobić aplikacje pokazującą najbliższy autobus do szkoły.
					A teraz jestem frontend developerem z dużym doświadczeniem i większymi ambicjami.
				</p>
				<p>
					Uwielbiam niszowe i nowoczesne rozwiązania, a w szczególności przekonywać do nich innych
				</p>
			</div>
			</div>
			<nav>
				<h3 class="text-2xl font-bold">Lista projektów</h3>
				<ul class="relative p-12 mt-4">
					<li aria-hidden="true" class="absolute size-1/2 top-0 left-0 border-(t-3 l-4 [#C91E7A]) rounded-xl" />
					<li>Projekt a</li>
					<li>Projekt b</li>
					<li>Projekt c</li>
					<li>Projekt d</li>
				</ul>
			</nav>
		</article>
		<TheTechSwipes />
		<TheTechTrivia />
	</main>
</template>

<style scoped>
.before-animate-blink::before {
	animation: blink 2s linear infinite;
}

@keyframes blink {
	from { opacity: 0 }
	50% { opacity: 5 }
	to { opacity: 0 }
}
</style>