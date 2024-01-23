<script setup lang="ts">



definePageMeta({
  title: 'Contact Us',
  preview: {
    title: 'Contact Us Form',
    description: 'Get in touch with us',
    categories: ['contact', 'forms'],
    src: '/img/screens/contact-us.png',
    srcDark: '/img/screens/contact-us-dark.png',
    order: 50,
  },
});

const contactInfo = ref({
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Contact Information Box (Left) -->
    <div>
      <InfoBox/>
    </div>

    <!-- Contact Form (Right) -->
    <div>
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            Contact Us
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">Get in touch with us</BaseText>
        </div>
        <div class="px-8 pt-5">
          <div class="mb-6">
            <BaseInput v-model="contactInfo.name" label="Your Name" placeholder="ex: John Doe" />
          </div>
          <div class="mb-6">
            <BaseInput v-model="contactInfo.email" label="Your Email" placeholder="ex: john@example.com" />
          </div>
          <div class="mb-6">
            <BaseInput v-model="contactInfo.subject" label="Subject" placeholder="ex: Inquiry about your services" />
          </div>
          <div class="mb-6">
            <BaseTextarea v-model="contactInfo.message" label="Your Message" placeholder="Write your message here..." />
          </div>
        </div>
        <!-- You can add additional styling and form validation as needed -->

        <div class="flex flex-col px-8 pt-4">
          <BaseButton color="primary" class="!h-12 w-full" @click.prevent="submitForm">Submit</BaseButton>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
