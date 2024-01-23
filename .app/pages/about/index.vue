<script setup lang="ts">

definePageMeta({
  title: 'About Us',
  preview: {
    title: 'About Our Company',
    description: 'Learn more about who we are and what we do',
    categories: ['about', 'company'],
    src: '/img/screens/about-us.png',
    srcDark: '/img/screens/about-us-dark.png',
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
            About Us
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">Learn more about our company</BaseText>
        </div>
        <div class="px-8 pt-5">
          <p>
            Welcome to [Your Company Name]! We are a [describe your company and its mission]...
          </p>
          <p>
            [Include any relevant details about your company's history, values, and goals]...
          </p>
          <p>
            [Feel free to add any additional information about your team, achievements, or milestones]...
          </p>

          <!-- Picture 1 -->
          <div class="my-8">
            <img src="/img/screens/about-us.png" alt="Description of Picture 1" class="w-full h-auto" />
          </div>

          <p>
            [Continue adding more detailed content about your company. You can include pictures, infographics, or any visual elements to enhance the content]...
          </p>

          <!-- Picture 2 -->
          <div class="my-8">
            <img src="/img/screens/about-us.png" alt="Description of Picture 2" class="w-full h-auto" />
          </div>

          <p>
            [Continue adding more detailed content about your company. You can include pictures, infographics, or any visual elements to enhance the content]...
          </p>

          <!-- Picture 3 -->
          <div class="my-8">
            <img src="/img/screens/tairo-layout-dark.png" alt="Description of Picture 3" class="w-full h-auto" />
          </div>

          <!-- Continue adding more content and pictures as needed -->

        </div>
        <!-- You can add additional styling and content as needed -->
      </BaseCard>
    </div>
  </div>
</template>
