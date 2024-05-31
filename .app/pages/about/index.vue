<script setup lang="ts">

const {t} = useI18n()

useSeoMeta({
  title: t('aboutUs.title'),
  ogTitle: t('aboutUs.title'),
  description: t('aboutUs.description'),
  ogDescription: t('aboutUs.description'),
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})


definePageMeta({
  title: {
    "fa": 'درباره ما',
    'en': 'About Us'
  },
  preview: {
    title: {
      'fa': 'درباره شرکت ما',
      'en': 'About Our Company'
    },
    description: {
      'fa': 'بیشتر درباره کسب و کار ما و چه کارهایی انجام می‌دهیم بیاموزید',
      'en': 'Learn more about who we are and what we do'
    },
    categories: ['about', 'company'],
    src: '/img/screens/auth-login-1-dark.png',
    srcDark: '/img/screens/auth-login-1-dark.png',
    order: 50,
  },
});

</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            {{ t('aboutUs.title') }}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{ t('aboutUs.description') }}
          </BaseText>
        </div>

        <div class="px-8 pt-5">
          <!-- Company Introduction -->
          <p>
            {{ t('aboutUs.introduction') }}
          </p>

          <!-- Mission Statement -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.missionTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.missionDescription') }}
            </p>
          </div>

          <!-- Vision Statement -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.visionTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.visionDescription') }}
            </p>
          </div>

          <!-- Core Values -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.valuesTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.valuesDescription') }}
            </p>
          </div>

          <!-- History and Milestones -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.historyTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.historyDescription') }}
            </p>
          </div>

          <!-- Customer Focus -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.customerFocusTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.customerFocusDescription') }}
            </p>
          </div>

          <!-- Community Involvement -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.communityTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.communityDescription') }}
            </p>
          </div>

          <!-- Contact Information -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t('aboutUs.contactTitle') }}
            </BaseHeading>
            <p>
              {{ t('aboutUs.contactDescription') }}
            </p>
            <p>
              {{ t("Lalectro") }}<br>
              {{ t("Address: No. 5, Barbad Complex, Barbad Alley, South Lalehzar Street, Tehran") }}<br>
              {{ t("Phone: 33-110-618") }}<br>
              {{ t("Email: [Your Contact Email]") }}
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
