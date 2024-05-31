<script setup lang="ts">

import {useProductStore} from "~/store/product";

const {t, locale} = useI18n()

definePageMeta({
  title: {
    "fa": 'محصولات',
    "en": 'Products'
  },
  preview: {
    title: {
      "fa": 'محصولات',
      "en": 'Products'
    },
    description: {
      "fa": 'محصولات ما را مرور کنید',
      'en': 'Browse our products'
    },
    categories: ['Products'],
    src: '/img/screens/layouts-card-grid-2.png',
    srcDark: '/img/screens/layouts-card-grid-2-dark.png',
    order: 58,
  },
})

useSeoMeta({
  title: t('shop.title'),
  ogTitle: t('shop.title'),
  description: t('shop.description'),
  ogDescription: t('shop.description'),
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})

const { open } = usePanels()

const productStore = useProductStore()
const getProducts = productStore.get_products;
const getSearchedProducts = productStore.get_search_products;

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(1)
const total = ref(0)


const initializeData = async () => {
  await getProducts(perPage.value, page.value);
  // await productStore.get_products_by_sold();
  // await productStore.get_products_by_arrival();
};

const initializeSearchData = async () => {
  await getSearchedProducts(filter.value, 0, perPage.value, page.value)
};

const productsToShow = ref([])

initializeData().then(() => {
  productsToShow.value = productsForEachPage(products);
  total.value = total_products.value
  console.log(productsToShow);
});

const {products, search_products ,total_products , total_search_products, message, type, pending} = storeToRefs(productStore)








const productsForEachPage = (productsL) => {
  let productsToShow = [];


  for (let i = ((1 - 1) * perPage.value); i < (1 * perPage.value); i++) {
    if (i < productsL.value.length) {
      productsToShow.push(productsL.value[i]);
    }
  }
  return productsToShow;
}



watch([page, perPage], () => {
  if (filter.value === '') {
    initializeData().then(() => {
      productsToShow.value = productsForEachPage(products);
      total.value = total_products.value
      console.log(productsToShow);
    });
  } else {
    initializeSearchData().then(() => {
      productsToShow.value = productsForEachPage(search_products);
      total.value = total_search_products.value
      console.log(productsToShow);
    });
  }
})


watch([filter], () => {
  if (filter.value === '') {
    initializeData().then(() => {
      if (page.value !== 1) {
        router.push({ path: route.path, query: { page: 1 } })
      }
      productsToShow.value = productsForEachPage(products);
      total.value = total_products.value
      console.log(productsToShow);
    });
  } else {
    initializeSearchData().then(() => {
      if (page.value !== 1) {
        router.push({ path: route.path, query: { page: 1 } })
      }
      productsToShow.value = productsForEachPage(search_products);
      total.value = total_search_products.value
      console.log(productsToShow);
    });
  }

})






// watch([filter, perPage], () => {
//   router.push({
//     query: {
//       page: undefined,
//     },
//   })
// })
//
// const query = computed(() => {
//   return {
//     filter: filter.value,
//     perPage: perPage.value,
//     page: page.value,
//   }
// })

// const { data, pending, error, refresh } = await useFetch(
//   '/api/company/projects/',
//   {
//     query,
//   },
// )


</script>

<template>
  <div>
    <TairoContentWrapper>
      <template #left>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          shape="full"
          :placeholder='t("Search Products...")'
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        />
      </template>
      <template #right>

<!--        <BaseButton shape="curved" class="w-full sm:w-32">Settings</BaseButton>-->
<!--        <BaseButton shape="curved" color="info" class="w-full sm:w-32" @click="open('FilterPanel')">-->
<!--          <Icon name="lucide:filter" class="h-4 w-4" />-->
<!--          <span>filter</span>-->
<!--        </BaseButton>-->
<!--        <BaseButton shape="curved" color="primary" class="w-full sm:w-32">-->
<!--          <Icon name="lucide:plus" class="h-4 w-4" />-->
<!--          <span>Create</span>-->
<!--        </BaseButton>-->
      </template>
      <div>
        <div v-if="!pending && productsToShow.length === 0">
          <BasePlaceholderPage
            :title="t('No matching results')"
            :subtitle='t("NoResults")'
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-7.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-7-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div
            class="ltablet:grid-cols-3 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <TransitionGroup
              enter-active-class="transform-gpu"
              enter-from-class="opacity-0 -translate-x-full"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="absolute transform-gpu"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-full"
            >

              <BaseCard
                v-for="item in productsToShow"
                :key="item?.id"
                shape="curved"
                class="p-4"
              >

                  <div class="hover:shadow-2xl">
                    <NuxtLink :to="`/product/details/${item?.slug}`">
                      <img :src="item?.photo" :alt="item?.name[locale]" class="rounded-lg" />
                    </NuxtLink>
                  </div>

                <div class="my-4 flex items-center justify-between">
                  <div>
                    <h4 class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium">
                      {{ item?.name[locale] }}
                    </h4>
                    <div class="text-muted-400 flex items-center gap-1">
                      <Icon name="ph:calendar-blank-duotone" class="h-4 w-4" />
                      <p class="font-sans text-sm">{{ item?.created_at.slice(0, 10) }}</p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <p v-if="(item?.discount_value !== 0) && (item?.discount_value !== null)" class="text-muted-400 line-through">{{t("Tooman")}} {{ item?.price }}</p>
                    <p v-else class="text-primary-500">{{t("Tooman")}} {{ item?.price }}</p>
                    <p v-if="(((item?.discount_value !== 0) && (item?.discount_value !== null)) && item?.discount_type === 'price') " class="text-primary-500">{{t("Tooman")}} {{ (item?.price - item?.discount_value)  }}</p>
                    <p v-if="(((item?.discount_value !== 0) && (item?.discount_value !== null)) && item?.discount_type === 'percentage') " class="text-primary-500">{{t("Tooman")}} {{ (item?.price * (100 - item?.discount_value) / 100)  }}</p>
                  </div>

                </div>

                <!-- Add discounted and original prices -->


<!--                <div class="flex items-center gap-2">-->
<!--&lt;!&ndash;                  <BaseButton shape="curved" class="w-full">details</BaseButton>&ndash;&gt;-->
<!--                  <BaseButton shape="curved" color="primary" class="w-full">Add to cart</BaseButton>-->
<!--                  <BaseButton-->
<!--                    shape="curved"-->
<!--                    class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl"-->
<!--                  >-->
<!--                    <div-->
<!--                    >-->
<!--                      <Icon name="feather:heart" class="h-4 w-4" />-->
<!--                    </div>-->
<!--                  </BaseButton>-->
<!--                </div>-->
              </BaseCard>

            </TransitionGroup>
          </div>
          <div class="mt-6" dir="ltr">
            <BasePagination
              :total-items="total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="curved"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
