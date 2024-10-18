<script setup lang="ts">
defineProps<{
	description: string;
	commitment: string;
	time: string;
	skills: string;
	title: string;
}>();
defineSlots<{
	title(): unknown;
	default(): unknown;
}>();
</script>

<template>
	<AccordionItem :value="title" class="border-(t white/10)">
		<AccordionTrigger class="min-h-10 px-8 data-[state=open]:(border-b-(~ white/10) min-h-14) outline-none text-left grid-(~ cols-[1fr_auto_4fr_auto_auto]) max-lg:grid-cols-[1fr_auto] gap-2 items-center w-full after:(c_ transition-transform data-[state=open]:-rotate-180 i-ph-caret-down-thin text-6 ml-auto opacity-50 hocus:opacity-100)">
			<span><slot name="title" /></span>
			<span aria-hidden="true" class="max-lg:hidden border-l-(~ white/10) h-full" />
			<span class="pl-2 max-lg:(row-start-2 col-span-full text-center text-sm)">{{ description }}</span>
			<span aria-hidden="true" class="max-lg:hidden border-l-(~ white/10) h-full" />
		</AccordionTrigger>
		<AccordionContent class="AccordionContent px-8 py-4">
			<p class="mt-1">
				<b>{{ $t('projects.fmcodeProjects.titles.engagement') }}: </b>{{ commitment }}
			</p>
			<p class="mt-1">
				<b>{{ $t('projects.fmcodeProjects.titles.time') }}: </b>{{ time }}
			</p>
			<p class="mt-1 mb-4">
				<b>{{ $t('projects.fmcodeProjects.titles.skills') }}: </b> {{ skills }}
			</p>
			<slot name="default" />
		</AccordionContent>
	</AccordionItem>
</template>

<style scoped>
.AccordionContent {
	--radix-accordion-content-height: 0;
	overflow: hidden;
}
.AccordionContent[data-state="open"] {
	animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state="closed"] {
	animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
	from {
		height: 0;
	}
	to {
		height: var(--radix-accordion-content-height);
	}
}

@keyframes slideUp {
	from {
		height: var(--radix-accordion-content-height);
	}
	to {
		height: 0;
	}
}
</style>
