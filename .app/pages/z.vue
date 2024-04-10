<script setup lang="ts">
// set compile time meta information
definePageMeta({
  // static meta information can be added to vue-router, we use it
  // to generate the search index in the demo
  title: 'Homepage',
})

// meta information can also be added to the head
useHead({
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

const {t} = useI18n()

// Here you can define your page logic
</script>

<template>
  <div>
    {{ t('Select') }}
  </div>
</template>
