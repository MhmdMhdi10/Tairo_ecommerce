<script setup lang="ts">

const props = defineProps(['label', 'value']);
</script>

<template>
  <div class="mb-4">
    <BaseText size="sm" class="text-muted-600">{{ label }}</BaseText>
    <BaseText size="md">{{ value }}</BaseText>
  </div>
</template>


