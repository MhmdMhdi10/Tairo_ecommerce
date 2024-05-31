<script setup lang="ts">

const {t} = useI18n()

definePageMeta({
  title: {
    "fa": 'تماس با ما',
    "en": 'Contact Us'
  },
  preview: {
    title: {
      "fa": 'تماس با ما',
      "en": 'Contact Us'
    },
    description: {
      "fa": 'با ما تماس بگیرید',
      'en': 'Get in touch with us'
    },
    categories: ['contact', 'forms'],
    src: '/img/screens/contact-us.png',
    srcDark: '/img/screens/contact-us-dark.png',
    order: 50,
  },
});

useSeoMeta({
  title: t('Contact Us'),
  ogTitle: t('Contact Us'),
  description: t('contactUs.description'),
  ogDescription: t('contactUs.description'),
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})

// const contactInfo = ref({
//   name: undefined,
//   email: undefined,
//   subject: undefined,
//   message: undefined,
// });
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Contact Information Box (Left) -->
    <div>
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            Information Box
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">Your contact information</BaseText>
        </div>
        <div class="px-8 pt-5">
          <!-- Phone Number Field -->
          <InfoBoxField :label="t('Phone Number')" :value="t('33-11-0618')" />

          <!-- Second Phone Number Field -->
          <InfoBoxField :label="t('Second Phone Number')" value="Your Second Phone Number" />

          <!-- Cellphone Number Field -->
          <InfoBoxField label="Cellphone Number" value="Your Cellphone Number" />

          <!-- Cellphone Number Field -->
          <InfoBoxField label="Cellphone Number" value="Your Cellphone Number" />

          <!-- phone Number Field -->
          <InfoBoxField label="phone Number" value="Your phone Number 1" />

          <!-- phone Number Field -->
          <InfoBoxField label="Cellphone Number" value="Your phone Number 2" />

          <!-- Telegram Field -->
          <InfoBoxField label="Telegram" value="Your Telegram" />

          <!-- Instagram Address Field -->
          <InfoBoxField label="Instagram" value="Your Instagram Address" />

          <!-- Add more InfoBoxField components as needed -->
        </div>
      </BaseCard>
    </div>

    <!-- Contact Form (Right) -->
<!--    <div>-->
<!--      <BaseCard class="pb-6">-->
<!--        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">-->
<!--          <BaseHeading as="h3" size="sm" weight="medium">-->
<!--            Contact Us-->
<!--          </BaseHeading>-->
<!--          <BaseText size="xs" class="text-muted-400">Get in touch with us</BaseText>-->
<!--        </div>-->
<!--        <div class="px-8 pt-5">-->
<!--          <div class="mb-6">-->
<!--            <BaseInput v-model="contactInfo.name" label="Your Name" placeholder="ex: John Doe" />-->
<!--          </div>-->
<!--          <div class="mb-6">-->
<!--            <BaseInput v-model="contactInfo.email" label="Your Email" placeholder="ex: john@example.com" />-->
<!--          </div>-->
<!--          <div class="mb-6">-->
<!--            <BaseInput v-model="contactInfo.subject" label="Subject" placeholder="ex: Inquiry about your services" />-->
<!--          </div>-->
<!--          <div class="mb-6">-->
<!--            <BaseTextarea v-model="contactInfo.message" label="Your Message" placeholder="Write your message here..." />-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; You can add additional styling and form validation as needed &ndash;&gt;-->

<!--        <div class="flex flex-col px-8 pt-4">-->
<!--          <BaseButton color="primary" class="!h-12 w-full" @click.prevent="submitForm">Submit</BaseButton>-->
<!--        </div>-->
<!--      </BaseCard>-->
<!--    </div>-->
  </div>
</template>
