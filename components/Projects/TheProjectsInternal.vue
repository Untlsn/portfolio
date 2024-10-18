<script setup lang="ts">
import ProjectsInternalShowcase from '~/components/Projects/ProjectsInternalShowcase.vue';
import ProjectsInternalShowcaseLite from '~/components/Projects/ProjectsInternalShowcaseLite.vue';

const opened = shallowRef<string[]>([]);

const all = ['Letssport', 'Światpaliw', 'Projekt rzadowy', 'Loximide', 'Nieruchomości', 'Bronisze', 'AI'];
</script>

<template>
	<article>
		<div class="flex justify-between m-4">
			<header class="text-5 font-semibold">
				{{ $t('projects.subtitles.0') }}:
			</header>
			<button
				class="border-y-(~ white/50) border-x-(2 white/10) px-4 py-2 hocus:border-(y-white x-white/50) transition-colors"
				@click="opened = opened.length ? [] : all"
			>
				{{ $t(`projects.toggleAllButton.${Number(!!opened.length)}`) }}
			</button>
		</div>
		<p class="m-4 text-sm">
			{{ $t('projects.licenceWarning') }}
		</p>
		<AccordionRoot
			v-model="opened"
			as-child
			class=""
			type="multiple"
		>
			<ul>
				<ProjectsInternalShowcase
					:title="$t('projects.fmcodeProjects.list.0.title')"
					:description="$t('projects.fmcodeProjects.list.0.description')"
					:commitment="$t('projects.fmcodeProjects.list.0.commitment')"
					:time="$t('projects.fmcodeProjects.list.0.time')"
					:skills="$t('projects.fmcodeProjects.list.0.skills')"
					href="https://www.lets.sport/"
					src="/screens/letssport.webp"
				/>
				<ProjectsInternalShowcase
					:title="$t('projects.fmcodeProjects.list.1.title')"
					:description="$t('projects.fmcodeProjects.list.1.description')"
					:commitment="$t('projects.fmcodeProjects.list.1.commitment')"
					:time="$t('projects.fmcodeProjects.list.1.time')"
					:skills="$t('projects.fmcodeProjects.list.1.skills')"
					href="https://swiatpaliw.com/"
					src="/screens/swiatpaliw.webp"
				/>
				<ProjectsInternalShowcaseLite
					v-for="i in 5"
					:key="i"
					:title="$t(`projects.fmcodeProjects.list.${1 + i}.title`)"
					:description="$t(`projects.fmcodeProjects.list.${1 + i}.description`)"
					:commitment="$t(`projects.fmcodeProjects.list.${1 + i}.commitment`)"
					:time="$t(`projects.fmcodeProjects.list.${1 + i}.time`)"
					:skills="$t(`projects.fmcodeProjects.list.${1 + i}.skills`)"
				/>
			</ul>
		</AccordionRoot>
	</article>
</template>

<style scoped>

</style>
