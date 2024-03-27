<script setup lang="ts">
import { ref } from "vue";
import {useUtilsStore} from "~/store/utils";
import {storeToRefs} from "pinia";

const app = useUtilsStore();

const { flag } = storeToRefs(app);

const {locale, locales} = useI18n()

// You should make sure to import usePanels from the correct path
const { open } = usePanels();
// console.log(`Image Path: /img/icons/flags/${flag}`);

</script>

<template>
  <button
    type="button"
    class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex h-9 w-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
    @click="open('language')"
  >
    <!-- Ensure that the image paths are correct -->
    <img
      v-if="flag"
      :src="locale === 'en' ? '/img/icons/flags/united-states-of-america.svg' : '/img/icons/flags/iran.png'"
      :class="locale === 'en' ? 'h-7 w-7 rounded-full' : 'h-8 w-8 rounded-full'"
      alt=""
    />
  </button>
</template>
