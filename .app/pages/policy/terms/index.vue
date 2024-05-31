<script setup lang="ts">

const {t} = useI18n()

definePageMeta({
  title: '{{t("Terms and Conditions")}}',
  preview: {
    title: '{{t("Terms and Conditions")}}',
    description: '{{t("Understand the terms and conditions for using our website and services.")}}',
    categories: ['terms and conditions'],
    src: '/img/screens/terms-preview.png',
    srcDark: '/img/screens/terms-preview.png',
    order: 54, // Adjust the order as needed
  },
});
</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            {{t("Terms and Conditions")}}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{t("Understand the terms and conditions for using our website and services.")}}
          </BaseText>
        </div>

        <div class="px-8 pt-5">
          <p>
            {{t("Welcome to")}} [{{t("Your Company Name")}}]. {{t("By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our site or services.")}}
          </p>

          <!-- User Responsibilities -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("1. User Responsibilities")}}
            </BaseHeading>
            <p>
              {{t("You agree to use our website and services for lawful purposes and to comply with all applicable laws. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.")}}
            </p>
          </div>

          <!-- Prohibited Activities -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("2. Prohibited Activities")}}
            </BaseHeading>
            <p>
              {{t("You must not engage in any activity that is illegal, offensive, or infringes on the rights of others. This includes, but is not limited to, spamming, hacking, or distributing malware.")}}
            </p>
          </div>

          <!-- Intellectual Property -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("3. Intellectual Property")}}
            </BaseHeading>
            <p>
              {{t("All content, trademarks, logos, and other intellectual property on our website are owned by or licensed to")}} [{{t("Your Company Name")}}]. {{t("You may not use or reproduce any of these without explicit permission.")}}
            </p>
          </div>

          <!-- Limitation of Liability -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("4. Limitation of Liability")}}
            </BaseHeading>
            <p>
              {{t("We are not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Your use of the site is at your own risk.")}}
            </p>
          </div>

          <!-- Changes to Terms and Conditions -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("5. Changes to Terms and Conditions")}}
            </BaseHeading>
            <p>
              {{t("We reserve the right to update or change these terms and conditions at any time. It is your responsibility to review them periodically. Your continued use of the site constitutes acceptance of any changes.")}}
            </p>
          </div>

          <!-- Contact Information -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("6. Contact Information")}}
            </BaseHeading>
            <p>
              {{t("If you have questions about these terms and conditions, please contact us at")}}
              <br>
              <NuxtLink
                to="/contact"
                class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
              >
                {{ t("Contact Us") }}
              </NuxtLink>
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
