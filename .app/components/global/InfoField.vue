<script setup lang="ts">
const props = defineProps([]);

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.value);
};


</script>

<template>
  <div class="mb-6 flex items-center">
    <BaseInput :value="props.value" :label="props.label" :readonly="true" />
    <button @click="copyToClipboard" class="ml-2 text-primary-600 focus:outline-none">
      Copy
    </button>
  </div>
</template>

<style scoped>

</style>
