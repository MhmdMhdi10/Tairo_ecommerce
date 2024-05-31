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

const { t } = useI18n()

</script>




<template>
  <div>
    <div class="max-w-4xl mx-auto mt-8">
      <BaseCard class="pb-6">
        <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
          <BaseHeading as="h3" size="sm" weight="medium">
            {{t("Privacy Policy")}}
          </BaseHeading>
          <BaseText size="xs" class="text-muted-400">
            {{ t("Learn about how we collect, use, and protect your personal information") }}
          </BaseText>
        </div>
        <div class="px-8 pt-5">
          <p>
            {{ t("At") }} {{t("Lalectro")}}{{t(", we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.") }}
          </p>

          <!-- Information Collection -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t("1. Information Collection") }}
            </BaseHeading>
            <p>
              {{t("Since our website does not currently support online shopping or user authentication, we collect minimal information through our website. However, when you place an order via phone, we may collect the following information:") }}
            </p>
            <ul class="list-disc list-inside">
              <li><strong>{{ t("Personal Information:") }}</strong> {{t("Name, phone number, and address for delivery purposes.") }}</li>
              <li><strong>{{ t("Order Information:") }}</strong> {{t("Details about the products you order.") }}</li>
            </ul>
          </div>

          <!-- Use of Information -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("2. Use of Information") }}
            </BaseHeading>
            <p>
              {{t("The information we collect is used to:") }}
            </p>
            <ul class="list-disc list-inside">
              <li>{{t("Process and fulfill your orders.") }}</li>
              <li>{{t("Communicate with you about your orders.") }}</li>
              <li>{{t("Improve our customer service and support.") }}</li>
            </ul>
          </div>

          <!-- Data Security -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{t("3. Data Security") }}
            </BaseHeading>
            <p>
              {{ t("We implement a variety of security measures to maintain the safety of your personal information when you place an order via phone. These measures include:") }}
            </p>
            <ul class="list-disc list-inside">
              <li>{{ t("Secure storage of personal information.") }}</li>
              <li>{{ t("Restricted access to personal information to authorized personnel only.") }}</li>
              <li>{{ t("Regular reviews of our security practices.") }}</li>
            </ul>
            <p>
              {{ t("However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.") }}
            </p>
          </div>

          <!-- Information Sharing and Disclosure -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t("4. Information Sharing and Disclosure") }}
            </BaseHeading>
            <p>
              {{ t("We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.") }}
            </p>
          </div>

          <!-- Third-Party Links -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t("5. Third-Party Links") }}
            </BaseHeading>
            <p>
              {{ t("Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.") }}
            </p>
          </div>

          <!-- Your Consent -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t("6. Your Consent") }}
            </BaseHeading>
            <p>
              {{ t("By using our site and placing orders via phone, you consent to our privacy policy.") }}
            </p>
          </div>

          <!-- Changes to Our Privacy Policy -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t("7. Changes to Our Privacy Policy") }}
            </BaseHeading>
            <p>
              {{ t("If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.") }}
            </p>
          </div>

          <!-- Contact Information -->
          <div class="my-8">
            <BaseHeading as="h4" size="sm" weight="medium" class="mb-2">
              {{ t("8. Contact Information") }}
            </BaseHeading>
            <p>
              {{ t("If you have any questions regarding this privacy policy, you may contact us using the information below:") }}
            </p>
            <p>
              {{ t("Lalectro") }}<br>
              {{ t("Address: No. 5, Barbad Complex, Barbad Alley, South Lalehzar Street, Tehran") }}<br>
              {{ t("Phone: 33-110-618") }}<br>
<!--              {{ t("Email: [Your Contact Email]") }}-->
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
