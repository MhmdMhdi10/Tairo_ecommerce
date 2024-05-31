<script setup lang="ts">

import {useBrandsStore} from "~/store/brands";

const BrandsStore = useBrandsStore()
const getBrands = BrandsStore.getBrandsList

const initializeData = async () => {
  await getBrands();
};

const {brands} = storeToRefs(BrandsStore)

const brandsToShow = ref([])

initializeData().then(() => {
  brandsToShow.value = brandsForEachPage()
  console.log(brandsToShow)
});



const {t, locale} = useI18n({useScope: "local"})


const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(2)


const brandsForEachPage = () => {
  let brandsToShow = [];


  for (let i = ((page.value - 1) * perPage.value); i < (page.value * perPage.value); i++) {
    if (i < brands.value.length) {
      brandsToShow.push(brands.value[i]);
    }
  }
  return brandsToShow;
}



watch([page, perPage], () => {
  initializeData().then(() => {
    brandsToShow.value = brandsForEachPage();
    console.log(brandsToShow)
  });
})





</script>
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-12 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >
          {{ t("Top Brands") }}
        </BaseText>
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          {{t("Quality Brands You Trust")}}
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          {{ t("At") }} <strong>Lalectro.com</strong>{{t(", we offer a wide range of high-quality products from top brands in the electrical and industrial sectors. Find the perfect solutions for your projects with names you know and trust.")}}
        </BaseParagraph>

        <!-- Important Notice -->
        <BaseCard class="bg-violet-500 dark:text-white text-muted-500 p-4 rounded-lg mt-4">
          <strong>{{t("Important:")}}</strong> {{t("If you don't find the product you're looking for on our website, you can order it by phone. Call us at [Your Contact Number] to place an order or for assistance.")}}
        </BaseCard>
      </div>

      <div class="ltablet:grid-cols-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BrandTiles
          v-for="item in brandsToShow"
          :key="item?.id"
          :title="item?.name[locale]"
          :src="item?.picture"
          :file="item?.file"
        >
          {{ item?.description[locale] }}
        </BrandTiles>
      </div>
    </div>
  </div>
</template>
