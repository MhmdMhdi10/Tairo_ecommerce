<script setup lang="ts">
import {useCategoryStore} from "~/store/category";
import {useProductStore} from "~/store/product";
import {storeToRefs} from "pinia";

const productStore = useProductStore()
const categoryStore = useCategoryStore()

const getProducts = productStore.get_products;
const getProductsBySold = productStore.get_products_by_sold;
const getProductsByArrival = productStore.get_products_by_arrival;
const getCategories = categoryStore.getCategories;


const initializeData = async () => {
  // await getProducts();
  await getProductsByArrival(4);
  await getProductsBySold(4);
  await getCategories();
};




const productsToShow = ref([])
const productsToShow_2 = ref([])
const productsToShow_3 = ref([])
const productsToShow_4 = ref([])




initializeData().then(() => {
  productsToShow.value = productsForEachPage(1,2);
  productsToShow_2.value = productsForEachPage(2,2);
  productsToShow_3.value = productsForEachPage(1, 2);
  productsToShow_4.value = productsForEachPage(2, 2)
  console.log(productsToShow, '1111111111111111111111111111');
  console.log(productsToShow_2, '2222222222222222222222222222');
  console.log(productsToShow_3, '33333333333333333333333333333');
  console.log(productsToShow_4, '44444444444444444444444444444');

});

const {products, products_arrival, products_sold} = storeToRefs(productStore)

const {categories} = storeToRefs(categoryStore)




const {t, locale} = useI18n({useScope: "local"})


const route = useRoute()
const router = useRouter()
// const page = ref(1)

const filter = ref('')
// const perPage = ref(2)


const productsForEachPage = (page, perPage) => {
  let productsToShoww = [];


  for (let i = ((page - 1) * perPage); i < (page * perPage); i++) {
    if (i < products_arrival.value.length) {
      productsToShoww.push(products_arrival.value[i]);
    }
  }
  return productsToShoww;
}





const { y } = useNinjaWindowScroll()

const gaugePersonal = reactive(useGaugePersonal())

function useGaugePersonal() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const options = {
    title: {
      text: undefined,
    },
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          margin: 0,
          size: '35%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  }

  const series = ref([76])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div
    class="dark:to-muted-900 relative min-h-screen overflow-hidden bg-gradient-to-b from-transparent to-white"
  >
    <div class="gridlines absolute inset-x-0 z-10 -mt-8 py-20"></div>
    <div class="absolute inset-x-0 z-20 -mt-24 py-20">
      <div
        class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl"
      >
        <div
          class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
        ></div>
        <div
          class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
        ></div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="relative z-30 pt-32 text-center">
        <BaseHeading
          as="h1"
          size="5xl"
          weight="light"
          lead="tight"
          class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
        >
          {{ t("Bringing Power to Your Projects with") }}
          <span
            class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
          ><strong>Lalectro</strong></span
          >
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
        >
          {{ t("Discover a wide range of electrical and industrial products, from contactors and lamps to cables and circuit breakers.At") }} <strong>Lalectro.com</strong>{{t(", we've got everything you need to power your projects.") }}
        </BaseParagraph>
        <div class="flex items-center justify-center">
          <BaseButton
            shape="curved"
            color="primary"
            to="/shop"
            shadow="hover"
            class="!h-12 w-44"
          >
            {{ t('Shop Now') }}
          </BaseButton>
        </div>


      </div>
      <!-- Components -->
      <fieldset
        disabled
        class="ltablet:min-h-[660px] min-h-[1975px] w-full sm:min-h-[760px] lg:min-h-[750px]"
        aria-hidden="true"
      >
        <div
          class="group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:ltablet:ps-24 relative z-30 mt-12 overflow-hidden border group-[&.scrolled]/landing:rounded-xl group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:pb-6 group-[&.scrolled]/landing:pe-6 group-[&.scrolled]/landing:ps-6 group-[&.scrolled]/landing:pt-10 motion-safe:transition-all motion-safe:duration-300 group-[&.scrolled]/landing:lg:ps-6"
        >
          <!-- Fake sidebar -->
<!--          <div-->
<!--            class="ltablet:w-16 ltablet:flex dark:bg-muted-800 absolute left-0 top-0 hidden h-full w-20 flex-col bg-white group-[&.scrolled]/landing:translate-x-0 group-[&:not(.scrolled)]/landing:-translate-x-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:flex"-->
<!--          >-->
<!--            <div class="flex h-20 w-full items-center justify-center">-->
<!--              <TairoLogo class="text-primary-500 h-8 w-8" />-->
<!--            </div>-->
<!--            <div class="flex h-16 w-full items-center justify-center">-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob bg-primary-500/10 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon-->
<!--                  name="ph:basket-duotone"-->
<!--                  class="text-primary-500 h-5 w-5"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex h-16 w-full items-center justify-center">-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon-->
<!--                  name="ph:users-three-duotone"-->
<!--                  class="text-muted-400 h-5 w-5"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex h-16 w-full items-center justify-center">-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon name="ph:users-duotone" class="text-muted-400 h-5 w-5" />-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex h-16 w-full items-center justify-center">-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon-->
<!--                  name="ph:chat-circle-duotone"-->
<!--                  class="text-muted-400 h-5 w-5"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            <div class="mt-auto flex h-16 w-full items-center justify-center">&ndash;&gt;-->
<!--&lt;!&ndash;              <div&ndash;&gt;-->
<!--&lt;!&ndash;                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                <Icon&ndash;&gt;-->
<!--&lt;!&ndash;                  name="ph:gear-six-duotone"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="text-muted-400 h-5 w-5"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="flex h-16 w-full items-center justify-center">&ndash;&gt;-->
<!--&lt;!&ndash;              <div&ndash;&gt;-->
<!--&lt;!&ndash;                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;                <BaseAvatar&ndash;&gt;-->
<!--&lt;!&ndash;                  shape="straight"&ndash;&gt;-->
<!--&lt;!&ndash;                  size="sm"&ndash;&gt;-->
<!--&lt;!&ndash;                  src="/img/avatars/24.svg"&ndash;&gt;-->
<!--&lt;!&ndash;                  class="nui-mask nui-mask-blob"&ndash;&gt;-->
<!--&lt;!&ndash;                />&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--          </div>-->
          <!-- Fake navbar -->
<!--          <div-->
<!--            class="ltablet:ps-24 absolute left-0 top-0 flex h-20 w-full items-center justify-between pe-6 ps-6 group-[&.scrolled]/landing:translate-y-0 group-[&:not(.scrolled)]/landing:-translate-y-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:ps-28"-->
<!--          >-->
<!--            <div class="flex h-full items-center gap-4">-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon name="lucide:menu" class="text-muted-400 h-5 w-5" />-->
<!--              </div>-->
<!--              <BaseText class="hidden sm:inline-block">Shop</BaseText>-->
<!--            </div>-->
<!--            <div class="flex h-full items-center justify-end gap-1">-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon name="ph:bell-duotone" class="text-muted-400 h-5 w-5" />-->
<!--              </div>-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon-->
<!--                  name="ph:circles-four-duotone"-->
<!--                  class="text-muted-400 h-5 w-5"-->
<!--                />-->
<!--              </div>-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <Icon-->
<!--                  name="ph:translate-duotone"-->
<!--                  class="text-muted-400 h-5 w-5"-->
<!--                />-->
<!--              </div>-->
<!--              <div-->
<!--                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"-->
<!--              >-->
<!--                <BaseAvatar-->
<!--                  shape="straight"-->
<!--                  size="xs"-->
<!--                  src="/img/avatars/24.svg"-->
<!--                  class="nui-mask nui-mask-blob"-->
<!--                />-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <div
            class="ltablet:grid-cols-3 ltablet:gap-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4"
          >
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-24 group-[&:not(.scrolled)]/landing:ptablet:mt-24 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-24"
            >

                <BaseHeading as="h3" size="2xl" weight="medium" class="mx-auto">
                  {{ t('Recently added') }}
                </BaseHeading>

              <!-- Widget -->

              <BaseCard
                v-for="item in productsToShow"
                :key="item?.id"
                shape="curved"
                class="p-2"
              >

              <div class="hover:shadow-lg"> <!-- Less intense shadow -->
                <NuxtLink :to="`/product/details/${item?.slug}`">
                  <img :src="item?.photo" :alt="item?.name[locale]" class="rounded-lg h-32 w-32 object-cover" /> <!-- Smaller image -->
                </NuxtLink>
              </div>

              <div class="my-2 flex items-center justify-between"> <!-- Reduced margin -->
                <div>
                  <h4 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"> <!-- Smaller font size -->
                    {{ item?.name[locale] }}
                  </h4>
                  <div class="text-muted-400 flex items-center gap-1 text-xs"> <!-- Smaller font size and tighter gap -->
                    <Icon name="ph:calendar-blank-duotone" class="h-3 w-3" /> <!-- Smaller icon -->
                    <p>{{ item?.created_at.slice(0, 10) }}</p>
                  </div>
                </div>
                <div class="mt-2"> <!-- Reduced margin -->
                  <p v-if="(item?.discount_value !== 0) && (item?.discount_value !== null)" class="text-muted-400 line-through text-sm"> <!-- Smaller text -->
                    {{t("Tooman")}} {{ item?.price }}
                  </p>
                  <p class="text-primary-500 text-sm"> <!-- Smaller text -->
                    {{t("Tooman")}} {{ item?.discount_type === 'price' ? (item?.price - item?.discount_value) : item?.discount_type === 'percentage' ? (item?.price * (100 - item?.discount_value) / 100) : item?.price }}
                  </p>
                </div>
              </div>

<!--              <div class="flex items-center gap-1"> &lt;!&ndash; Tighter gap &ndash;&gt;-->
<!--                <BaseButton shape="curved" color="primary" class="w-full h-7 text-xs"> &lt;!&ndash; Smaller button &ndash;&gt;-->
<!--                  {{ t('Add to cart') }}-->
<!--                </BaseButton>-->
<!--                <BaseButton-->
<!--                  shape="curved"-->
<!--                  class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-lg"-->
<!--                >-->
<!--                  <Icon name="feather:heart" class="h-3 w-3" /> &lt;!&ndash; Smaller icon &ndash;&gt;-->
<!--                </BaseButton>-->
<!--              </div>-->

              </BaseCard>



            </div>
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-16 group-[&:not(.scrolled)]/landing:ptablet:mt-16 flex flex-col gap-6 sm:hidden sm:gap-3 lg:flex lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-16"
            >

              <BaseHeading as="h3" size="2xl" weight="medium" class="mx-auto">
                {{ t('Recently Added') }}
              </BaseHeading>

              <BaseCard
                v-for="item in productsToShow_2"
                :key="item?.id"
                shape="curved"
                class="p-2"
              >

                <div class="hover:shadow-lg"> <!-- Less intense shadow -->
                  <NuxtLink :to="`/product/details/${item?.slug}`">
                    <img :src="item?.photo" :alt="item?.name[locale]" class="rounded-lg h-32 w-32 object-cover" /> <!-- Smaller image -->
                  </NuxtLink>
                </div>

                <div class="my-2 flex items-center justify-between"> <!-- Reduced margin -->
                  <div>
                    <h4 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"> <!-- Smaller font size -->
                      {{ item?.name[locale] }}
                    </h4>
                    <div class="text-muted-400 flex items-center gap-1 text-xs"> <!-- Smaller font size and tighter gap -->
                      <Icon name="ph:calendar-blank-duotone" class="h-3 w-3" /> <!-- Smaller icon -->
                      <p>{{ item?.created_at.slice(0, 10) }}</p>
                    </div>
                  </div>
                  <div class="mt-2"> <!-- Reduced margin -->
                    <p v-if="(item?.discount_value !== 0) && (item?.discount_value !== null)" class="text-muted-400 line-through text-sm"> <!-- Smaller text -->
                      {{t("Tooman")}} {{ item?.price }}
                    </p>
                    <p class="text-primary-500 text-sm"> <!-- Smaller text -->
                      {{t("Tooman")}} {{ item?.discount_type === 'price' ? (item?.price - item?.discount_value) : item?.discount_type === 'percentage' ? (item?.price * (100 - item?.discount_value) / 100) : item?.price }}
                    </p>
                  </div>
                </div>

<!--                <div class="flex items-center gap-1"> &lt;!&ndash; Tighter gap &ndash;&gt;-->
<!--                  <BaseButton shape="curved" color="primary" class="w-full h-7 text-xs"> &lt;!&ndash; Smaller button &ndash;&gt;-->
<!--                    Add to cart-->
<!--                  </BaseButton>-->
<!--                  <BaseButton-->
<!--                    shape="curved"-->
<!--                    class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-lg"-->
<!--                  >-->
<!--                    <Icon name="feather:heart" class="h-3 w-3" /> &lt;!&ndash; Smaller icon &ndash;&gt;-->
<!--                  </BaseButton>-->
<!--                </div>-->

              </BaseCard>


            </div>

            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-24 group-[&:not(.scrolled)]/landing:ptablet:mt-24 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-24"
            >

              <BaseHeading as="h3" size="2xl" weight="medium" class="mx-auto">
                {{ t('Best Selling') }}
              </BaseHeading>
              <!-- Widget -->

              <BaseCard
                v-for="item in productsToShow_3"
                :key="item?.id"
                shape="curved"
                class="p-2"
              >

                <div class="hover:shadow-lg"> <!-- Less intense shadow -->
                  <NuxtLink :to="`/product/details/${item?.slug}`">
                    <img :src="item?.photo" :alt="item?.name[locale]" class="rounded-lg h-32 w-32 object-cover" /> <!-- Smaller image -->
                  </NuxtLink>
                </div>

                <div class="my-2 flex items-center justify-between"> <!-- Reduced margin -->
                  <div>
                    <h4 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"> <!-- Smaller font size -->
                      {{ item?.name[locale] }}
                    </h4>
                    <div class="text-muted-400 flex items-center gap-1 text-xs"> <!-- Smaller font size and tighter gap -->
                      <Icon name="ph:calendar-blank-duotone" class="h-3 w-3" /> <!-- Smaller icon -->
                      <p>{{ item?.created_at.slice(0, 10) }}</p>
                    </div>
                  </div>
                  <div class="mt-2"> <!-- Reduced margin -->
                    <p v-if="(item?.discount_value !== 0) && (item?.discount_value !== null)" class="text-muted-400 line-through text-sm"> <!-- Smaller text -->
                      {{t("Tooman")}} {{ item?.price }}
                    </p>
                    <p class="text-primary-500 text-sm"> <!-- Smaller text -->
                      {{t("Tooman")}} {{ item?.discount_type === 'price' ? (item?.price - item?.discount_value) : item?.discount_type === 'percentage' ? (item?.price * (100 - item?.discount_value) / 100) : item?.price }}
                    </p>
                  </div>
                </div>

<!--                <div class="flex items-center gap-1"> &lt;!&ndash; Tighter gap &ndash;&gt;-->
<!--                  <BaseButton shape="curved" color="primary" class="w-full h-7 text-xs"> &lt;!&ndash; Smaller button &ndash;&gt;-->
<!--                    Add to cart-->
<!--                  </BaseButton>-->
<!--                  <BaseButton-->
<!--                    shape="curved"-->
<!--                    class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-lg"-->
<!--                  >-->
<!--                    <Icon name="feather:heart" class="h-3 w-3" /> &lt;!&ndash; Smaller icon &ndash;&gt;-->
<!--                  </BaseButton>-->
<!--                </div>-->

              </BaseCard>



            </div>


            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-16 group-[&:not(.scrolled)]/landing:ptablet:mt-16 flex flex-col gap-6 sm:hidden sm:gap-3 lg:flex lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-16"
            >

              <BaseHeading as="h3" size="2xl" weight="medium" class="mx-auto">
                {{ t('Best Selling') }}
              </BaseHeading>

              <BaseCard
                v-for="item in productsToShow_4"
                :key="item?.id"
                shape="curved"
                class="p-2"
              >

                <div class="hover:shadow-lg"> <!-- Less intense shadow -->
                  <NuxtLink :to="`/product/details/${item?.slug}`">
                    <img :src="item?.photo" :alt="item?.name[locale]" class="rounded-lg h-32 w-32 object-cover" /> <!-- Smaller image -->
                  </NuxtLink>
                </div>

                <div class="my-2 flex items-center justify-between"> <!-- Reduced margin -->
                  <div>
                    <h4 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"> <!-- Smaller font size -->
                      {{ item?.name[locale] }}
                    </h4>
                    <div class="text-muted-400 flex items-center gap-1 text-xs"> <!-- Smaller font size and tighter gap -->
                      <Icon name="ph:calendar-blank-duotone" class="h-3 w-3" /> <!-- Smaller icon -->
                      <p>{{ item?.created_at.slice(0, 10) }}</p>
                    </div>
                  </div>
                  <div class="mt-2"> <!-- Reduced margin -->
                    <p v-if="(item?.discount_value !== 0) && (item?.discount_value !== null)" class="text-muted-400 line-through text-sm"> <!-- Smaller text -->
                      {{t("Tooman")}} {{ item?.price }}
                    </p>
                    <p class="text-primary-500 text-sm"> <!-- Smaller text -->
                      {{t("Tooman")}} {{ item?.discount_type === 'price' ? (item?.price - item?.discount_value) : item?.discount_type === 'percentage' ? (item?.price * (100 - item?.discount_value) / 100) : item?.price }}
                    </p>
                  </div>
                </div>

<!--                <div class="flex items-center gap-1"> &lt;!&ndash; Tighter gap &ndash;&gt;-->
<!--                  <BaseButton shape="curved" color="primary" class="w-full h-7 text-xs"> &lt;!&ndash; Smaller button &ndash;&gt;-->
<!--                    {{ t('Add to cart') }}-->
<!--                  </BaseButton>-->
<!--                  <BaseButton-->
<!--                    shape="curved"-->
<!--                    class="text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-lg"-->
<!--                  >-->
<!--                    <Icon name="feather:heart" class="h-3 w-3" /> &lt;!&ndash; Smaller icon &ndash;&gt;-->
<!--                  </BaseButton>-->
<!--                </div>-->

              </BaseCard>


            </div>


          </div>
        </div>
      </fieldset>

      <!-- Components -->
      <LandingHeroMockup />
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-dark.svg);
}
</style>
