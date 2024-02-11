<script setup lang="ts">

definePageMeta({
  title: 'Shipping Policy',
  preview: {
    title: 'Our Shipping Policy',
    description: 'Learn about our shipping and delivery policies',
    categories: ['shipping policy', 'delivery'],
    src: '/img/screens/auth-login-1-dark.png',
    srcDark: '/img/screens/auth-login-1-dark.png',
    order: 52, // Adjust the order as needed
  },
});

</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            Shipping Policy
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">Learn about our shipping and delivery policies</BaseText>
        </div>
        <div class="px-8 pt-5">
          <p>
            At [Your Company Name], we are committed to providing a seamless and efficient shipping experience for our customers. Please review our shipping policy below.
          </p>

          <!-- Policy Details -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              1. Shipping Methods and Times
            </BaseHeading>
            <p>
              We offer several shipping methods, including standard and express options. Shipping times may vary based on your location. Please refer to our checkout page for estimated delivery times.
            </p>
          </div>

          <!-- Picture 1 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 1" class="w-full h-auto" />
          </div>

          <!-- Additional Policy Details -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              2. Shipping Costs
            </BaseHeading>
            <p>
              Shipping costs are calculated at checkout based on the selected shipping method and the destination address. We may offer free shipping promotions during specific periods.
            </p>
          </div>

          <!-- Picture 2 -->
          <div class="my-8">
            <img src="/img/screens/auth-login-1-dark.png" alt="Description of Picture 2" class="w-full h-auto" />
          </div>

          <!-- Additional Policy Details -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              3. Tracking Your Order
            </BaseHeading>
            <p>
              Once your order is shipped, you will receive a confirmation email with a tracking number. You can track your order's status using our online tracking system.
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
