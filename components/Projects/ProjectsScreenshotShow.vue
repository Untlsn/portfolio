<script setup lang="ts">
defineProps<{
	src: string;
	alt: string;
}>();
</script>

<template>
	<DialogRoot>
		<DialogTrigger class="mx-auto block w-fit font-bold text-lg">
			Pokaż screenshot
		</DialogTrigger>
		<DialogPortal>
			<DialogContent class="fixed inset-0 w-324 max-w-screen h-fit m-auto z-999 p-12 pt-0 bg-white/10 rounded-lg text-right slow-show">
				<DialogClose class="i-ph-x h-12 w-8">
					Zamknij
				</DialogClose>
				<img :src="src" :alt="alt" class="max-w-full mx-auto rounded">
			</DialogContent>
		</DialogPortal>
	</DialogRoot>
</template>

<style scoped>
.slow-show {
	animation: slow-show .3s linear forwards;
}

@keyframes slow-show {
	from { opacity: .2 }
	to { opacity: 1 }
}
</style>
