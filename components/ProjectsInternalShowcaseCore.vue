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
	<AccordionItem :value="title" class="px-8 py-2 border-(t white/10) data-[state=open]:py-8 transition-all">
		<AccordionTrigger class="mb-2 outline-none">
			<slot name="title" />
			- {{ description }}
		</AccordionTrigger>
		<AccordionContent class="AccordionContent">
			<p class="mt-1">
				<b>Poziom zaangażowania: </b>{{ commitment }}
			</p>
			<p class="mt-1">
				<b>Czas: </b>{{ time }}
			</p>
			<p class="mt-1 mb-4">
				<b>Zdobyte umiejętności: </b> {{ skills }}
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
