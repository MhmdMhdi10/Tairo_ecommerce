<script setup lang="ts">

const route = useRoute()
const app = useAppConfig()
const { setLocaleCookie, setLocale, locale: i18nlocale} = useI18n({ useScope: 'local' });

const locale = ref(useCookie('i18n_redirected', {
  watch:true,
}))

if (locale.value === undefined) {
  setLocale('fa')
  setLocaleCookie('fa')
}

const htmlDir = ref(locale.value === 'fa' ? 'rtl' : 'ltr')
const htmlLang = ref(locale.value === 'fa' ? 'fa' : 'eng')

// Watch for changes in the locale stored in cookies
watch([locale], () => {
  htmlDir.value = locale.value === 'fa' ? 'rtl' : 'ltr'
  htmlLang.value = locale.value === 'fa' ? 'fa' : 'eng'
})

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route.meta?.title[locale] ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.tairo.title}`
      : `${app.tairo.title}`
  },
  htmlAttrs: {
    lang: [htmlLang],
    dir: [htmlDir],
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],

  meta: [
    { name: 'description', content: () => route.meta.description ?? '' },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@cssninjaStudio',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
    {
      name: 'og:image',
      content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
        route.meta.description ||
          (route.meta.preview
            ? `${route.meta.preview?.title} - ${route.meta.preview?.description}`
            : ''),
      )}&url=${encodeURIComponent(
        'https://media.cssninja.io/content/products/logos/tairo-text-white.svg',
      )}&previewUrl=${encodeURIComponent(
        `https://tairo.cssninja.io${
          route.meta.preview?.src || '/img/screens/documentation-hub.png'
        }`,
      )}`,
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
