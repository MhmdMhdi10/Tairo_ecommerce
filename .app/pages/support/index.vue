<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  title: 'customerSupport.title',
  preview: {
    title: 'customerSupport.title',
    description: 'customerSupport.description',
    categories: ['customer support'],
    src: '/img/screens/support-preview.png',
    srcDark: '/img/screens/support-preview.png',
    order: 55, // Adjust the order as needed
  },
});
</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            {{ t('customerSupport.title') }}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{ t('customerSupport.description') }}
          </BaseText>
        </div>

        <div class="px-8 pt-5">
          <p>
            {{ t('customerSupport.welcomeMessage') }}
          </p>

          <!-- Support Chat Service -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('customerSupport.chatService.title') }}
            </BaseHeading>
            <p>
              {{ t('customerSupport.chatService.description') }}
            </p>
            <p>
              <strong>{{ t('customerSupport.chatService.businessHours') }}</strong>
              {{ t('customerSupport.chatService.hours') }}
            </p>
          </div>

          <!-- Response Time -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('customerSupport.responseTime.title') }}
            </BaseHeading>
            <p>
              {{ t('customerSupport.responseTime.description') }}
            </p>
          </div>

          <!-- FAQs -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('customerSupport.faqs.title') }}
            </BaseHeading>
            <p>
              {{ t('customerSupport.faqs.description') }}
            </p>
            <ul class="list-disc list-inside">
              <li>{{ t('customerSupport.faqs.question3.title') }}</li>
              <p>
                {{ t('customerSupport.faqs.question3.answer') }}
                <NuxtLink
                  to="/contact"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  {{ t("Contact Us") }}
                </NuxtLink>
              </p>
            </ul>
          </div>

        </div>
      </BaseCard>
    </div>
  </div>
</template>
