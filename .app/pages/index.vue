<script setup lang="ts">

const {t} = useI18n();

definePageMeta({
  title: {
    "fa": "فروشگاه آنلاین لوازم الکترونیکی",
    "en": "Online Electronics Store"
  },
  description: {
    "fa": "فروشگاه آنلاین ما انواع لوازم الکترونیکی با کیفیت بالا را ارائه می‌دهد. خرید آسان و امن با پشتیبانی مشتری بی‌نظیر.",
    "en": "Our online store offers a wide range of high-quality electronic products. Easy and secure shopping with exceptional customer support."
  },
  breadcrumb: {
    label: 'Lalectro',
  },
  layout: 'landing',
})

useSeoMeta({
  title: t('Lalectro'),
  ogTitle: t('Lalectro'),
  description: t('landing.description'),
  ogDescription: t('landing.description'),
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})


</script>

<template>
  <div>
    <LandingLayout/>

    <LandingHero />
<!--    <LandingCustomizer />-->
<!--    <LandingDemos :limit="12" />-->
<!--    <LandingLayers />-->
<!--    <LandingLayouts />-->
    <LandingFeatures />
<!--    <LandingBenefits />-->
<!--    <LandingCta />-->
    <LandingContent />
    <LandingFooter />
  </div>
</template>
