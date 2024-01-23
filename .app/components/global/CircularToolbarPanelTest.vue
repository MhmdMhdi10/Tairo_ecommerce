<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <button
    type="button"
    class="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
    @click="open('PanelComponent')"
  >
    <Icon name="ph:shopping-cart-duotone" class="h-5 w-5 text-white" />
  </button>
</template>
