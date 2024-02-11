<script setup lang="ts">

definePageMeta({
  title: 'Return Policy',
  preview: {
    title: 'Our Return Policy',
    description: 'Learn about our return and refund policies',
    categories: ['return policy', 'refund'],
    src: '/img/screens/auth-login-1-dark.png',
    srcDark: '/img/screens/auth-login-1-dark.png',
    order: 51, // Adjust the order as needed
  },
});

</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            Return Policy
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">Learn about our return and refund policies</BaseText>
        </div>
        <div class="px-8 pt-5">
          <p>
            At [Your Company Name], we strive to provide excellent products/services. However, we understand that there might be instances where you need to return a purchase. Please review our return policy below.
          </p>

          <!-- Policy Details -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              1. Returns and Exchanges
            </BaseHeading>
            <p>
              We accept returns and exchanges within [number of days] days of the purchase date. To be eligible for a return or exchange, your item must be unused and in the same condition that you received it.
            </p>
          </div>

          <!-- Picture 1 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 1" class="w-full h-auto" />
          </div>

          <!-- Additional Policy Details -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              2. Refunds
            </BaseHeading>
            <p>
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
          </div>

          <!-- Picture 2 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 2" class="w-full h-auto" />
          </div>

          <!-- Additional Policy Details -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              3. Contact Us
            </BaseHeading>
            <p>
              If you have any questions about our return policy, please contact us at [contact email/phone].
            </p>
          </div>

          <!-- Picture 3 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 3" class="w-full h-auto" />
          </div>

          <!-- Continue adding more content and pictures as needed -->

        </div>
        <!-- You can add additional styling and content as needed -->
      </BaseCard>
    </div>
  </div>
</template>
