<script setup lang="ts">
const {t} = useI18n()

function callUs() {
  window.location.href = 'tel:YOUR_PHONE_NUMBER';
}


</script>


<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          {{ t("Fast and Extensive Shipping") }}
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="normal"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          {{ t("Why Choose") }} Lalectro.com
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          {{ t("At") }} <strong>Lalectro.com</strong>{{ t(", we're committed to providing reliable service and a great shopping experience. We offer a wide range of electrical and industrial products and are constantly updating our website with new features to make your experience even better.") }}
        </BaseParagraph>
      </div>
      <div class="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            {{ t("Easy Buying") }}
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              {{t("While we're building out our website, you can buy from us by calling or visiting in person. Our team is here to help you find what you need.")}}
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              {{t("We're adding more features soon, like profile creation, online carts, pre-invoices, product reviews, and FAQs, to make your online shopping experience even smoother.")}}
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            {{t("Fast and Extensive Shipping")}}
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              {{t("We offer fast shipping to many locations. you'll be able to track your orders and manage your shipments easily and receive your products as soon as possible.")}}
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              {{t("Our goal is to make sure you get what you need, when you need it. If you have any questions, our customer service team is here to assist you.")}}
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            {{t("Exclusive Discounts")}}
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              {{t("We appreciate our customers, especially those who work in the same industry as we do. That's why we offer exclusive discounts to professionals and regular customers alike.")}}
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
              {{t("Keep an eye out for our special offers and promotions. We want to ensure you're getting the best value when you shop with us.")}}
            </BaseParagraph>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/img/BackGroundLanding_4.png"
          alt="placeholder-image"
          class="mx-auto max-w-full sm:max-w-3xl"
          loading="lazy"
          decoding="async"
        />
        <div class="mx-auto mb-3 max-w-md text-center">
          <BaseHeading
            as="h3"
            size="xl"
            weight="light"
            lead="normal"
            class="text-muted-800 mb-1 dark:text-white"
          >
            {{t("Contact Us Today")}}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-100">
            {{t("We're here to help. Call us or visit in person to get started, and stay tuned for our upcoming online features.")}}
          </BaseParagraph>
        </div>
        <div class="my-2 flex justify-center gap-2">
          <BaseButton
            color="primary"
            shape="curved"
            shadow="hover"
            class="!h-11 w-48"
            @click="callUs"
          >
            <Icon name="mdi:phone" class="h-4 w-4" />
            <span>{{t("Call Us")}}</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

