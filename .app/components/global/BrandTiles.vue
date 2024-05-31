<script setup lang="ts">
import scope from "ultrahtml/dist/transformers/scope";

const props = defineProps<{
  src: string;
  title: string;
  file: string;
}>();

const {t, locale} = useI18n()
</script>

<template>
  <div class="group relative">
    <div
      class="from-primary-600 absolute -inset-1 rounded-lg bg-gradient-to-r to-indigo-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 motion-reduce:hidden"
    ></div>
    <div
      class="items-top ring-muted-900/5 dark:bg-muted-950 relative flex justify-between space-x-6 rounded-xl bg-white p-5 leading-none ring-1"
    >
      <div class="flex items-center space-x-6">
        <img alt="" :src="props.src" class="text-primary-600 h-8 w-8 shrink-0 ml-3" />
        <div class="space-y-1">
          <BaseHeading as="h3" size="md" weight="light" lead="tight">
            {{ props.title }}
          </BaseHeading>
          <BaseParagraph
            size="sm"
            lead="tight"
            class="text-muted-500 dark:text-muted-400"
          >
            <slot></slot>
          </BaseParagraph>
        </div>
      </div>

      <!-- Rounded Download Button with Download Icon -->
      <div class="flex items-center">
        <a
          :href="props.file"
          download
          class="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition hover:cursor-pointer"
          aria-label="Download File"
          :title='t("DownloadFile")'
        >
          <!-- Font Awesome Download Icon -->
          <Icon name="lucide:download" class="h-5 w-5"  />
        </a>
      </div>
    </div>
  </div>
</template>
