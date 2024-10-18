<script setup lang="ts">
const { locale } = useI18n();

const labels: Record<string, string> = {
	pl: 'Polski',
	en: 'English',
};
</script>

<template>
	<div class="h-12">
		<header class="shadow-lg w-full fixed top-0 left-0 h-12 flex gap-4 items-center px-4">
			<img src="/favicon.svg" alt="Untlsn logo" class="size-8">
			<span class="text-2xl mr-auto">Untlsn</span>
			<DropdownMenuRoot v-model="locale">
				<DropdownMenuTrigger
					class="w-26 border-y-(~ white/50) border-x-(2 white/10) px-4 py-2 hocus:border-(y-white x-white/50) transition-colors"
					aria-label="Customise options"
				>
					{{ labels[locale] }}
				</DropdownMenuTrigger>

				<DropdownMenuPortal>
					<DropdownMenuContent
						class="rounded z-100 bg-white/10 backdrop-blur w-26 -translate-y-1"
					>
						<DropdownMenuItem
							v-for="(label, key) in labels"
							:key="key"
							class="my-1 py-1 text-center cursor-pointer transition-colors hocus:bg-white/10"
						>
							<NuxtLink :to="`/${key}`">
								{{ label }}
							</NuxtLink>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenuPortal>
			</DropdownMenuRoot>
			<nav>
				<a href="https://github.com/untlsn" target="_blank" class="text-xl i-line-md-github">
					github
				</a>
			</nav>
		</header>
	</div>
</template>

<style scoped>

</style>
