<script setup lang="ts">

import BaseHeadSkip from '~/components/BaseHeadSkip.vue';

defineSlots<{ default(): unknown, description(): unknown }>()
</script>

<template>
<BaseHeadSkip v-bind="$attrs"><slot /></BaseHeadSkip>
<p class="mt-4 mb-8 text-lg"><slot name="description" /></p>
</template>

<style scoped>

</style>