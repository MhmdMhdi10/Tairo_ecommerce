<script setup lang="ts">

definePageMeta({
  title: 'Privacy Policy',
  preview: {
    title: 'Our Privacy Policy',
    description: 'Learn about how we collect, use, and protect your personal information',
    categories: ['privacy policy'],
    src: '/img/screens/auth-login-1-dark.png',
    srcDark: '/img/screens/auth-login-1-dark.png',
    order: 53, // Adjust the order as needed
  },
});

</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            Privacy Policy
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">Learn about how we collect, use, and protect your personal information</BaseText>
        </div>
        <div class="px-8 pt-5">
          <p>
            At [Your Company Name], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          <!-- Information Collection -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              1. Information Collection
            </BaseHeading>
            <p>
              We may collect personal information, such as your name, email address, and other details, when you interact with our website or services. This information is collected with your consent or as required for the provision of our services.
            </p>
          </div>

          <!-- Picture 1 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 1" class="w-full h-auto" />
          </div>

          <!-- Use of Information -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              2. Use of Information
            </BaseHeading>
            <p>
              We use the collected information to provide and improve our services, personalize your experience, and communicate with you. Your information may also be used for analytics and marketing purposes.
            </p>
          </div>

          <!-- Picture 2 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 2" class="w-full h-auto" />
          </div>

          <!-- Data Security -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              3. Data Security
            </BaseHeading>
            <p>
              We implement security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <!-- Picture 3 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 3" class="w-full h-auto" />
          </div>

          <!-- Continue adding more content and pictures as needed -->

          <!-- Contact Information -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              4. Contact Information
            </BaseHeading>
            <p>
              If you have any questions about our Privacy Policy or the practices of this site, please contact us at [contact email/phone].
            </p>
          </div>

        </div>
        <!-- You can add additional styling and content as needed -->
      </BaseCard>
    </div>
  </div>
</template>
