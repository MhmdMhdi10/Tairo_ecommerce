<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  title: 'shippingPolicy.title',
  preview: {
    title: 'shippingPolicy.title',
    description: 'shippingPolicy.description',
    categories: ['shipping policy'],
    src: '/img/screens/shipping-preview.png',
    srcDark: '/img/screens/shipping-preview.png',
    order: 56, // Adjust the order as needed
  },
});
</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            {{ t('shippingPolicy.title') }}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{ t('shippingPolicy.description') }}
          </BaseText>
        </div>

        <div class="px-8 pt-5">
          <p>
            {{ t('shippingPolicy.intro') }}
          </p>

          <!-- Shipping Options -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('shippingPolicy.options.title') }}
            </BaseHeading>
            <p>
              {{ t('shippingPolicy.options.description') }}
            </p>
            <ul class="list-disc list-inside">
              <li>{{ t('shippingPolicy.options.tehran') }}</li>
              <li>{{ t('shippingPolicy.options.otherCities') }}</li>
            </ul>
          </div>

          <!-- Disclaimer -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('shippingPolicy.disclaimer.title') }}
            </BaseHeading>
            <p>
              {{ t('shippingPolicy.disclaimer.description') }}
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
