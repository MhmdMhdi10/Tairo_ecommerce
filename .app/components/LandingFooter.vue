<script setup lang="ts">
const year = new Date().getFullYear();

const {t} = useI18n()



</script>

<template>
  <footer class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white py-8">
    <!-- Company Logo -->
    <div class="flex justify-center mb-4">
      <NuxtLink to="/" aria-label="Go to Lalectro homepage">
        <img
          src="/img/logos/Lalectro_Logos/Lalectro_Main_White_Done.png"
          alt="Lalectro Logo"
          class="h-8"
        />
      </NuxtLink>
    </div>

    <!-- Navigation Links -->
    <div class="max-w-7xl mx-auto px-6 mt-6">
      <div class="flex justify-center gap-6">
        <NuxtLink
          to="/shop"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors"
        >
          {{ t("Shop") }}
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors"
        >
          {{ t("About Us") }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors"
        >
          {{ t("Contact Us") }}
        </NuxtLink>
        <NuxtLink
          to="/support"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors"
        >
          {{ t("Support") }}
        </NuxtLink>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="flex justify-center mt-6">
      <div class="text-sm flex">
        <BaseParagraph class="text-muted-500 dark:text-muted-400">{{ t("Phone: 33-110-618") }}</BaseParagraph>
        <div class="mx-4"></div>
        <BaseParagraph class="text-muted-500 dark:text-muted-400">{{ t("Address: No. 5, Barbad Complex, Barbad Alley, South Lalehzar Street, Tehran") }}</BaseParagraph>
      </div>
    </div>

    <!-- Legal Links -->
    <div class="flex justify-center mt-4">
      <div class="text-sm">
        <NuxtLink
          to="/policy/privacy"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400"
        >
          {{ t("Privacy Policy") }}
        </NuxtLink>
        <span class="mx-2">|</span>
        <NuxtLink
          to="/policy/terms"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400"
        >
          {{ t("Terms & Conditions") }}
        </NuxtLink>
      </div>
    </div>

<!--    &lt;!&ndash; Social Media Links &ndash;&gt;-->
<!--    <div class="flex justify-center gap-6 mt-6">-->
<!--      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-muted-500 hover:text-primary-500 dark:text-muted-400 dark:hover:text-primary-400 text-sm transition-colors">-->
<!--        <i class="fab fa-facebook-f"> <Icon name="fa6-brands:facebook" class="mx-auto h-4 w-4" /> </i>-->
<!--      </a>-->
<!--      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-muted-500 hover:text-primary-500 dark:text-muted-400 dark:hover:text-primary-400 text-sm transition-colors">-->
<!--        <i class="fab fa-twitter"> <Icon name="fa6-brands:twitter" class="mx-auto h-4 w-4" /> </i>-->
<!--      </a>-->
<!--      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-muted-500 hover:text-primary-500 dark:text-muted-400 dark:hover:text-primary-400 text-sm transition-colors">-->
<!--        <i class="fab fa-instagram"> <Icon name="fa6-brands:instagram" class="mx-auto h-4 w-4" /> </i>-->
<!--      </a>-->
<!--    </div>-->

    <!-- Copyright and Back to Top -->
    <div class="flex justify-center items-center mt-6">
      <span class="text-muted-500 dark:text-muted-400 text-sm">
        © Lalectro {{ year }}{{ t(". All rights reserved.") }}
      </span>
    </div>

    <div class="border-t border-muted-200 dark:border-muted-700 mt-6 py-4">
      <div class="flex justify-center gap-6 text-sm">
        <span class="text-muted-500 dark:text-muted-400">{{ t("Call if you need a website: +98 9908419824") }}</span>
        <a href="https://t.me/MohammadMahdiFarahani10" target="_blank" rel="noopener noreferrer" class="text-muted-500 hover=text-primary-500 dark:text-muted-400 dark:hover=text-primary-400">
          {{ t("Telegram") }} <Icon name="fa6-brands:telegram" class="mx-auto h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
