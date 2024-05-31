<script setup lang="ts">
definePageMeta({
  title: '{{t("Return Policy")}}',
  preview: {
    title: '{{t("Return Policy")}}',
    description: '{{t("Learn about our return policy and how to return a product.")}}',
    categories: ['return policy'],
    src: '/img/screens/return-preview.png',
    srcDark: '/img/screens/return-preview.png',
    order: 55, // Adjust the order as needed
  },
});

const {t} = useI18n()
</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            {{t("Return Policy")}}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{t("Learn about our return policy and how to return a product.")}}
          </BaseText>
        </div>

        <div class="px-8 pt-5">
          <p>
            {{t("We want you to be completely satisfied with your purchase. However, there are certain conditions under which products cannot be returned:")}}
          </p>
          <ul class="list-disc list-inside my-4">
            <li>{{t("Broken or used products cannot be returned.")}}</li>
            <li>{{t("Products with a damaged hologram cannot be returned.")}}</li>
          </ul>
          <p>
            {{t("For further details, as return policies may vary in different situations, please call us to understand how you can return the product.")}}
          </p>
          <p class="mt-4">
            <a href="/contact" class="text-blue-500 underline">{{t("Contact Us")}}</a>
          </p>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
