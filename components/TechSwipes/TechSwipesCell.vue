<script setup lang="ts">

</script>

<template>
<li class="size-32 mb-4 p-4 bg-gray-8 rounded-lg children:(transition-transform duration-500 delay-200 hover:-translate-x-12/10) overflow-hidden jumping-first">
	<slot />
</li>
</template>

<style scoped>
.jumping-first > *:first-child {
	animation: jumping 1s infinite alternate ease-in-out;
}

@keyframes jumping {
	from { translate: .2rem 0 }
	to { translate: -.5rem 0 }
}
</style>