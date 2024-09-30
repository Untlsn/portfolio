<script setup lang="ts">
import TechSwipesCellLite from '~/components/TechSwipes/TechSwipesCellLite.vue';
import TechSwipesCellDouble from '~/components/TechSwipes/TechSwipesCellDouble.vue';
import BaseHeadSkip from '~/components/BaseHeadSkip.vue';

const selected = shallowRef('react');
watchEffect(() => {
	console.log(selected.value);
})

const selectedData = computed(() => {
	switch (selected.value) {
		case 'windows': return {
			from: 'Windows',
			to: 'Arch (btw)',
		}
		case 'sass': return {
			from: 'Sass',
			to: 'Tailwind',
		}
		case 'javascript': return {
			from: 'Javascript',
			to: 'Typescript / Rust',
		}
		case 'nodejs': return {
			from: 'Nodejs',
			to: 'Bun',
		}
		case 'express': return {
			from: 'Express',
			to: 'Hono',
		}
		default: return {
			from: 'React',
			to: 'Vue / Solid',
		}
	}
})

</script>

<template>
<article class="m-20">
	<BaseHeadSkip class="text-10 font-bold">Technologie i alternatywy:</BaseHeadSkip>
	<p class="mt-4 mb-8 text-lg">Znam i uzywam tych technologi, ale zdecydowanie bardziej wole te alternatywy:</p>
	<ul class="grid-(~ cols-fit-32) gap-4 justify-center">
		<TechSwipesCellDouble
				:model-value="selected == 'react'"
				@update:model-value="selected = 'react'"
				prev="i-devicon-react"
				:next="['i-devicon-vuejs', 'i-devicon-solidjs']"
		/>
		<TechSwipesCellLite
				:model-value="selected == 'windows'"
				@update:model-value="selected = 'windows'"
				prev="i-devicon-windows11"
				next="i-devicon-archlinux"
		/>
		<TechSwipesCellLite
				:model-value="selected == 'sass'"
				@update:model-value="selected = 'sass'"
				prev="i-devicon-sass"
				next="i-devicon-tailwindcss"
		/>
		<TechSwipesCellDouble
				:model-value="selected == 'javascript'"
				@update:model-value="selected = 'javascript'"
				class="bg-white"
				bar-class="bg-black"
				prev="i-devicon-javascript"
				:next="['i-devicon-typescript', 'i-devicon-rust']"
		/>
		<TechSwipesCellLite
				:model-value="selected == 'nodejs'"
				@update:model-value="selected = 'nodejs'"
				prev="i-devicon-nodejs"
				next="i-devicon-bun"
		/>
		<TechSwipesCellLite
				:model-value="selected == 'express'"
				@update:model-value="selected = 'express'"
				class="bg-white"
				prev="i-devicon-express"
				next="i-devicon-hono"
		/>
	</ul>
	<div>
		<p class="text-2xl">Technologie:</p>
		<div class="justify-center flex gap-4 text-4xl mt-8">
			<p>
				{{ selectedData.from }}
			</p>
			<span>-></span>
			<p>
				{{ selectedData.to }}
			</p>
		</div>
	</div>
</article>
</template>

<style>
.i-devicon-hono {
	background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.78em' height='1em' viewBox='0 0 256 330'%3E%3Cpath fill='%23FF5B11' d='M134.129.029q1.315-.17 2.319.662a1256 1256 0 0 1 69.573 93.427q24.141 36.346 41.082 76.862q27.055 72.162-28.16 125.564q-48.313 40.83-111.318 31.805q-75.312-15.355-102.373-87.133Q-1.796 217.85.614 193.51q4.014-41.896 19.878-80.838q6.61-15.888 17.228-29.154a382 382 0 0 1 16.565 21.203q3.66 3.825 7.62 7.289Q92.138 52.013 134.13.029' opacity='.993'/%3E%3Cpath fill='%23FF9758' d='M129.49 53.7q36.47 42.3 65.93 90.114a187.3 187.3 0 0 1 15.24 33.13q12.507 49.206-26.836 81.169q-38.05 26.774-83.488 15.902q-48.999-15.205-56.653-65.929q-1.857-15.993 3.314-31.142a225.4 225.4 0 0 1 17.89-35.78l19.878-29.155a5510 5510 0 0 0 44.726-58.31'/%3E%3C/svg%3E") no-repeat;
	background-size: 100% 100%;
	display: inline-block;
	min-height: 1em;
	white-space: nowrap;
}
</style>