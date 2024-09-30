<script setup lang="ts">
const model = defineModel<boolean>()

</script>

<template>
	<CheckboxRoot
			as="li"
			name="tech-swipes-cell"
			:checked="model"
			@update:checked="model = $event"
			class="size-32 mb-4 p-4 bg-white rounded-lg
			children:(transition-transform duration-500 delay-200 hover:-translate-x-12/10) overflow-hidden jumping-first
			border-6 data-[state=checked]:border-#C91E7A"
	>
		<slot />
	</CheckboxRoot>
</template>

<style>
.jumping-first > *:first-child {
	animation: jumping 1s infinite alternate ease-in-out;
}

@keyframes jumping {
	from { translate: .2rem 0 }
	to { translate: -.5rem 0 }
}
</style>