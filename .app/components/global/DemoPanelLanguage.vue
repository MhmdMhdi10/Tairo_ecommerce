<script setup lang="ts">


const {t, setLocaleCookie, setLocale, locale} = useI18n({ useScope: 'local' });

const { close } = usePanels();

// Function to switch locale
const switchLocale = ({newLocale}: { newLocale: any }) => {
  setLocaleCookie(newLocale)
  setLocale(newLocale)
}

</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-muted-700 text-lg font-semibold dark:text-white"
      >{{ t('Select') }}
      </h2>
      <button
        type="button"
        class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white"

        @click="close"
      >
        <Icon :name="locale === 'fa' ? 'feather:chevron-left' : 'feather:chevron-right'" class="h-6 w-6"/>
      </button>
    </div>

    <div class="relative h-[calc(100%_-_64px)] w-full px-10">
      <div class="grid grid-cols-3 py-6">
        <!-- Radio box -->
        <div class="relative my-4 flex items-center justify-center">
          <div class="relative">
            <NuxtLink
              type="radio"
              name="language_selection"
              class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
              key="en"
              @click="switchLocale({newLocale : 'en'})"

            />
            <div v-if="locale === 'en'"
                 class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   role="img" class="icon h-5 w-5" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20 6L9 17l-5-5"></path>
              </svg>
            </div>
            <div
              class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-10 w-10 rounded-full"
                src="/img/icons/flags/united-states-of-america.svg"
                alt="flag icon"
              />
            </div>
            <div
              class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
            >
              <Icon name="feather:check" class="h-3 w-3"/>
            </div>
          </div>
        </div>
        <!-- Radio box -->
        <div class="relative my-4 flex items-center justify-center">
          <div class="relative">
            <NuxtLink
              type="radio"
              name="language_selection"
              class="peer absolute start-0 top-0 z-20 h-full w-full cursor-pointer opacity-0"
              key="fa"
              :checked="currentLocale === 'fa'"
              @click="switchLocale({newLocale : 'fa'})"

            />
            <div v-if="locale === 'fa'"
                 class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                   role="img" class="icon h-5 w-5" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20 6L9 17l-5-5"></path>
              </svg>
            </div>
            <div
              class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-12 w-12 rounded-full"
                src="/img/icons/flags/iran.png"
                alt="flag icon"
              />
            </div>
            <div
              class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"
            >
              <Icon name="feather:check" class="h-3 w-3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
