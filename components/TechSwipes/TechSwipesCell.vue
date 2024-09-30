<script setup lang="ts">
const model = defineModel<boolean>()

</script>

<template>
	<CheckboxRoot
			as="li"
			name="tech-swipes-cell"
			:checked="model"
			class="size-32 mb-4 p-4 bg-white rounded-lg
			children:(transition-transform duration-500 delay-200 hover:-translate-x-12/10 data-[state=checked]:-translate-x-12/10) overflow-hidden jumping-first
			border-6 data-[state=checked]:border-[#C91E7A]"
			@update:checked="model = $event"
	>
		<slot />
	</CheckboxRoot>
</template>

<style>
.jumping-first > *:first-child {
	animation: jumping 1s infinite alternate ease-in-out;
}

@keyframes jumping {
	from { translate: 2px 0 }
	to { translate: 4px 0 }
}
</style>