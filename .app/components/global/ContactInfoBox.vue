<script setup lang="ts">

const props = defineProps(['icon', 'label', 'value']);

const boxClass = ref('bg-blue-500'); // Default color
const showCopiedMessage = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.value);
  showCopiedMessage.value = true;
  setTimeout(() => {
    showCopiedMessage.value = false;
  }, 2000); // Hide the message after 2 seconds
};
</script>

<template>
  <div>
    <div :class="boxClass" @click="copyToClipboard" class="cursor-pointer">
      <div class="flex items-center space-x-2 p-4 rounded-lg">
        <Icon :name="icon" class="h-4 w-4 text-white" />
        <p class="text-white">{{ label }}:</p>
        <p class="font-semibold">{{ value }}</p>
      </div>
    </div>
    <div v-if="showCopiedMessage" class="text-green-500 mt-2 ml-4">Copied successfully!</div>
  </div>
</template>



<style scoped>
/* You can customize the colors here */
.bg-blue-500 { background-color: #3490dc; }
.bg-green-500 { background-color: #38a169; }
.bg-yellow-500 { background-color: #f59e0b; }
.bg-red-500 { background-color: #e3342f; }
.bg-purple-500 { background-color: #6d28d9; }
</style>
