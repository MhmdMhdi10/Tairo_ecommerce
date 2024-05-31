<script setup lang="ts">

const {t} = useI18n()

</script>

<template>
  <div
    class="ltablet:gap-y-0 relative z-30 mt-32 grid grid-cols-12 gap-y-8 overflow-hidden sm:w-full sm:gap-x-16 lg:gap-y-0"
  >
    <div class="col-span-12">
      <div class="mx-auto flex h-full w-full max-w-xl flex-col justify-center">
        <div class="text-center">
          <BaseText
            class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >
            Lalectro.com
          </BaseText>
          <BaseHeading
            as="h2"
            size="4xl"
            weight="light"
            lead="tight"
            class="text-muted-800 mx-auto mb-4 max-w-xl dark:text-white"
          >
            {{ t("Exceptional Service, Anywhere") }}
          </BaseHeading>
          <BaseParagraph
            size="lg"
            class="text-muted-500 dark:text-muted-100 ptablet:max-w-lg ptablet:mx-auto mb-4 max-w-2xl"
          >
            {{ t("At") }} <strong>Lalectro.com</strong>{{t(", we offer reliable shipping to nearly any location, a wide range of electrical and industrial products, and top-notch customer support. No matter where you are, we can help you get the parts and components you need.") }}
          </BaseParagraph>
          <div
            class="ptablet:max-w-md ptablet:mx-auto mt-6 grid scale-90 grid-cols-3"
          >
            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="motion-safe:animate-spin-slow from-success-100 to-success-500 dark:from-success-800 absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr blur-sm transition-all duration-200"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="mdi:truck-delivery-outline"
                    class="text-success-500 relative -top-0.5 h-7 w-7"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >{{ t("Global Shipping") }}</BaseText
              >
            </div>
            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="motion-safe:animate-spin-slow [animation-delay: 0.3s] absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-sky-100 to-sky-500 blur-sm transition-all duration-200 dark:from-sky-800"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="mdi:archive-outline"
                    class="h-8 w-8 text-sky-500"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >{{ t("Wide Product Range") }}</BaseText
              >
            </div>

            <!-- Col -->
            <div class="flex flex-col items-center text-center">
              <div
                class="nui-mask nui-mask-hexed relative mb-2 flex h-20 w-20 shrink-0 items-center justify-center"
              >
                <div
                  class="motion-safe:animate-spin-slow [animation-delay: 0.6s] absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-tr from-indigo-100 to-indigo-500 blur-sm transition-all duration-200 dark:from-indigo-800"
                ></div>
                <div
                  class="nui-mask nui-mask-hexed dark:bg-muted-800 flex h-[76px] w-[76px] items-center justify-center bg-white"
                >
                  <Icon
                    name="mdi:headset"
                    class="h-6 w-6 text-indigo-500"
                  />
                </div>
              </div>
              <BaseText size="sm" class="text-muted-500 dark:text-muted-300"
                >{{ t("Customer Support") }}</BaseText
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
