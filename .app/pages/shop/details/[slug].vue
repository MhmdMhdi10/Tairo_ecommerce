<script setup lang="ts">
import {useProductStore} from "~/store/product";

definePageMeta({
  title: 'Project Details',
  preview: [
    {
      title: 'Project details',
      description: 'For displaying fitness project details',
      categories: ['layouts', 'projects'],
      src: '/img/screens/layouts-projects-details.png',
      srcDark: '/img/screens/layouts-projects-details-dark.png',
      order: 72,
      params: {
        slug: 'health-and-fitness-dashboard',
      },
    },
    {
      title: 'Project details',
      description: 'For displaying banking project details',
      categories: ['layouts', 'projects'],
      src: '/img/screens/layouts-projects-details.png',
      srcDark: '/img/screens/layouts-projects-details-dark.png',
      order: 72,
      params: {
        slug: 'banking-and-finance-dashboard',
      },
    },
  ],
})

const productStore = useProductStore()
const getProduct = productStore.get_product;

const { open } = usePanels()

const route = useRoute()
const slug = computed(() => route.params.slug)



const initializeData = async () => {
  await getProduct(slug.value);
  // await productStore.get_products_by_sold();
  // await productStore.get_products_by_arrival();
};



// initializeData().then(() => {
//   productsToShow.value = productsForEachPage();
//   console.log(productsToShow);
// });

initializeData();

const {product , message, type, pending} = storeToRefs(productStore)
const {t, locale} = useI18n({useScope: "local"})


console.log(slug.value)



// const query = computed(() => {
//   return {
//     slug: slug.value,
//   }
// })
//
// const { data, pending, error, refresh } = await useFetch(
//   '/api/company/projects',
//   {
//     query,
//   },
// )

// if (!data.value?.project) {
//   await navigateTo('/layouts/projects')
// }

const currentTask = ref()

function openTaskPanel(id: number, tasks: any) {
  currentTask.value = tasks.find((task: any) => task.id === id)
  open('task', { task: currentTask })
}
</script>

<template>
  <div class="relative">

<!--    <div class="absolute end-0 top-2 z-20">-->
<!--      <BaseDropdown-->
<!--        flavor="context"-->
<!--        label="Dropdown"-->
<!--        orientation="end"-->
<!--        size="md"-->
<!--        class="z-20"-->
<!--        shape="curved"-->
<!--      >-->
<!--        <BaseDropdownItem-->
<!--          :to="`/layouts/projects/board/${slug}`"-->
<!--          title="Board view"-->
<!--          text="Swicth to board view"-->
<!--          class="sm:hidden"-->
<!--        >-->
<!--          <template #start>-->
<!--            <Icon name="ph:kanban-duotone" class="me-2 block h-5 w-5" />-->
<!--          </template>-->
<!--        </BaseDropdownItem>-->
<!--        <BaseDropdownDivider />-->
<!--        <BaseDropdownItem to="#" title="Edit" text="Edit this project">-->
<!--          <template #start>-->
<!--            <Icon name="ph:pencil-duotone" class="me-2 block h-5 w-5" />-->
<!--          </template>-->
<!--        </BaseDropdownItem>-->
<!--        <BaseDropdownDivider />-->
<!--        <BaseDropdownItem to="#" title="Permissions" text="Manage permissions">-->
<!--          <template #start>-->
<!--            <Icon name="ph:lock-duotone" class="me-2 block h-5 w-5" />-->
<!--          </template>-->
<!--        </BaseDropdownItem>-->
<!--        <BaseDropdownItem to="#" title="Files" text="Manage files">-->
<!--          <template #start>-->
<!--            <Icon name="ph:file-duotone" class="me-2 block h-5 w-5" />-->
<!--          </template>-->
<!--        </BaseDropdownItem>-->
<!--        <BaseDropdownDivider />-->
<!--        <BaseDropdownItem to="#" title="Delete" text="Delete this project">-->
<!--          <template #start>-->
<!--            <Icon name="ph:trash-duotone" class="me-2 block h-5 w-5" />-->
<!--          </template>-->
<!--        </BaseDropdownItem>-->
<!--      </BaseDropdown>-->
<!--    </div>-->
    <div v-if="(product === undefined) || (product === null)">
      <BasePlaceholderPage
        title="Project not found"
        subtitle="We couldn't find a project matching this namespace."
      >
        <template #image>
          <img
            class="block dark:hidden"
            src="/img/illustrations/placeholders/flat/placeholder-projects.svg"
            alt="Placeholder image"
          />
          <img
            class="hidden dark:block"
            src="/img/illustrations/placeholders/flat/placeholder-projects-dark.svg"
            alt="Placeholder image"
          />
        </template>
      </BasePlaceholderPage>
    </div>
    <div v-else class="h-full">
      <BaseTabs
        model-value="overview"
        :tabs="[
          {
            label: 'Overview',
            value: 'overview',
          },
          // {
          //   label: 'Questions',
          //   value: 'Questions',
          // },
          // {
          //   label: 'Review',
          //   value: 'Review',
          // },
        ]"
      >
        <template #tab="{ activeValue }">
          <!-- Overview -->
          <div v-if="activeValue === 'overview'">
            <div class="grid grid-cols-12 gap-6">
              <div class="ltablet:col-span-8 col-span-12 lg:col-span-8">
                <BaseCard class="space-y-12 p-10">
                  <div
                    class="border-muted-200 dark:border-muted-700 flex flex-col items-center justify-between gap-8 border-b pb-12 sm:flex-row"
                  >
                    <div>
                      <BaseHeading tag="h2" size="2xl" weight="medium">
                        {{ product?.name[locale] }}
                      </BaseHeading>
                      <BaseParagraph
                        size="lg"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        {{ product?.category.name[locale] }}
                      </BaseParagraph>
                      <BaseParagraph size="sm" class="text-muted-400 py-4">
                        {{ product?.description[locale] }}
                      </BaseParagraph>
                      <div v-if="product?.price > 0" class="flex">
                        <div>
                          <BaseParagraph size="xl" v-if="(product.discount_value !== 0) && (product.discount_value !== null)" class="text-muted-400 line-through">{{ product.price }}</BaseParagraph>
                          <BaseParagraph size="xl" v-else class="dark:text-primary-600 text-primary-400">{{ product.price }}</BaseParagraph>
                          <BaseParagraph size="xl" v-if="(((product.discount_value !== 0) && (product.discount_value !== null)) && product.discount_type === 'price') " class="dark:text-primary-600 text-primary-400">{{ (product.price - product.discount_value)  }}</BaseParagraph>
                          <BaseParagraph size="xl" v-if="(((product.discount_value !== 0) && (product.discount_value !== null)) && product.discount_type === 'percentage') " class="dark:text-primary-600 text-primary-400">{{ (product.price * (100 - product.discount_value) / 100)  }}</BaseParagraph>
                        </div>
                        <div>
                          <BaseParagraph size="sm" v-if="(product.discount_value !== 0) && (product.discount_value !== null)" class="text-muted-600 dark:text-muted-400 pt-1.5 line-through "> {{t('Tooman')}} </BaseParagraph>
                          <BaseParagraph size="sm" class="dark:text-primary-600 text-primary-400 pt-1.5 "> {{t('Tooman')}} </BaseParagraph>
                        </div>
                      </div>
                      <div v-else>
                        <BaseParagraph
                          size="md"
                          class=" dark:text-primary-600 text-primary-400"
                        >
                          {{ t("NoPrice") }}
                        </BaseParagraph>

                        <div class="grid grid-cols-6">
                          <div class="col-span-3 gap-2">
                            <BaseSelect
                              :label="t('countingUnit')"
                              :classes="{
                            wrapper: 'w-full sm:w-40',
                          }"
                            >
                              <option >{{product?.counting_unit[locale]}}</option>
                              <option v-if="product?.counting_unit_2" :value="25">{{ product?.counting_unit_2[locale]}}</option>
                              <option v-if="product?.counting_unit_3" :value="50">{{product?.counting_unit[locale]}}</option>

                            </BaseSelect>
                          </div>
                          <div class="col-span-2"></div>
                        </div>
                      </div>
                    </div>

                    <div class="w-full shrink-0 sm:w-72">
                      <img
                        alt=""
                        :src="product?.photo"
                        class="rounded-lg"
                      />
                    </div>

                  </div>

                  <!-- SECOND PART -->

                  <div class="border-muted-200 dark:border-muted-700 grid gap-4 border-b pb-12 sm:grid-cols-4">
                    <div class="sm:col-span-1">
                      <img
                        :src="product?.brand.picture"
                        :alt="product?.brand.name[locale]"
                        class="max-w-full rounded"
                      />
                    </div>
                    <div class="sm:col-span-3">
                      <BaseHeading tag="h2" size="lg" weight="bold">
                        {{ product?.brand.name[locale] }}
                      </BaseHeading>
                      <BaseParagraph size="md" class="mt-2">
                        {{ product?.brand.description[locale] }}
                      </BaseParagraph>
                      <BaseParagraph size="sm" class="text-muted-400 mt-2">
                        {{ product?.brand.country[locale] }}
                      </BaseParagraph>
                    </div>
                  </div>


                  <!-- THIRD PART -->

                  <div>
                    <h4
                      class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"
                    >
                      {{t("RecentFilesAndPricingLists")}}
                    </h4>
                    <div class="grid gap-8 pb-6 sm:grid-cols-2">
                        <div class="flex w-full items-center gap-2">
                          <img
                            :src="product?.brand.picture"
                            :alt="product?.brand.name[locale]"
                            class="max-w-[46px]"
                          />
                          <div>
                            <BaseHeading tag="h3" size="sm" weight="medium">
                              {{ product?.brand.name[locale] }}
                            </BaseHeading>
                            <BaseParagraph size="xs" class="text-muted-400">
                              <span>{{ product?.brand.country[locale] }}</span>
                              <span class="px-1 text-base leading-tight">
                                &middot;
                              </span>
                              <span>{{ product?.brand.updated_at.slice(0, 10) }}</span>
                            </BaseParagraph>
                          </div>
                          <div class="ms-auto">
                            <a
                              :href="product?.brand.file"
                              download
                              aria-label="Download File"
                              :title='t("DownloadFile")'
                            >
                              <BaseButtonIcon
                                shape="full"
                                data-nui-tooltip="Download file"
                                size="sm"
                              >
                                <Icon name="lucide:arrow-down" />
                              </BaseButtonIcon>
                            </a>
                          </div>
                        </div>

                        <div v-if="product.brand.file_2" class="flex w-full items-center gap-2">
                          <img
                            :src="product?.brand.picture"
                            :alt="product?.brand.name[locale]"
                            class="max-w-[46px]"
                          />
                          <div>
                            <BaseHeading tag="h3" size="sm" weight="medium">
                              {{ product?.brand.name[locale] }}
                            </BaseHeading>
                            <BaseParagraph size="xs" class="text-muted-400">
                              <span>{{ product?.brand.country[locale] }}</span>
                              <span class="px-1 text-base leading-tight">
                                &middot;
                              </span>
                              <span>{{ product?.brand.updated_at.slice(0, 10) }}</span>
                            </BaseParagraph>
                          </div>
                          <div class="ms-auto">
                            <a
                              :href="product?.brand.file_2"
                              download
                              aria-label="Download File"
                              :title='t("DownloadFile")'
                            >
                            <BaseButtonIcon
                              shape="full"
                              data-nui-tooltip="Download file"
                              size="sm"
                            >
                                <Icon name="lucide:arrow-down" />
                            </BaseButtonIcon>
                            </a>
                          </div>
                        </div>
                    </div>
                  </div>
                </BaseCard>
              </div>
              <div class="ltablet:col-span-4 col-span-12 lg:col-span-4">
                <div class="space-y-6">
                  <!-- Customer -->
                  <BaseCard class="p-8">
                    <h4
                      class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"
                    >
                      {{ t("Guarantee") }}
                    </h4>

                    <div class="mb-4 flex items-center gap-2">
<!--                      <BaseAvatar-->
<!--                        :src="data?.project.customer.logo"-->
<!--                        size="md"-->
<!--                        :data-nui-tooltip="data?.project.customer.name"-->
<!--                        class="bg-muted-100 dark:bg-muted-700"-->
<!--                      />-->
                      <div>
                        <BaseHeading
                          tag="h5"
                          size="lg"
                          weight="medium"
                          lead="none"
                          class="line-clamp-1"
                        >
<!--                          {{ data?.project.customer.name }}-->
                        </BaseHeading>
                        <BaseParagraph size="sm" class="text-muted-400">
                          {{ product?.garantee[locale] }}

                        </BaseParagraph>
                      </div>
                    </div>
<!--                    <div class="w-full space-y-1">-->
<!--                      <div class="flex items-center justify-between">-->
<!--                        <h4-->
<!--                          class="text-muted-700 dark:text-muted-100 font-sans text-sm font-medium"-->
<!--                        >-->
<!--                          Progress-->
<!--                        </h4>-->
<!--                        <div>-->
<!--                          <span class="text-muted-400 font-sans text-sm">-->
<!--&lt;!&ndash;                            {{ data?.project.completed }}%&ndash;&gt;-->
<!--                          </span>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <BaseProgress-->
<!--                        size="xs"-->
<!--                        color="primary"-->
<!--                        :value="data?.project.completed"-->
<!--                      />-->
<!--                    </div>-->
                  </BaseCard>
                  <!-- Tools -->
<!--                  <BaseCard class="p-8">-->
<!--                    <h4-->
<!--                      class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"-->
<!--                    >-->
<!--                      Project Tools-->
<!--                    </h4>-->
<!--                    <div class="space-y-8">-->
<!--                      <div-->
<!--                        v-for="tool in data?.project.tools"-->
<!--                        :key="tool.name"-->
<!--                        class="flex items-center gap-2"-->
<!--                      >-->
<!--                        <BaseAvatar-->
<!--                          :src="tool.icon"-->
<!--                          size="xs"-->
<!--                          :data-nui-tooltip="tool.name"-->
<!--                          class="bg-muted-100 dark:bg-muted-700"-->
<!--                        />-->
<!--                        <div>-->
<!--                          <BaseHeading-->
<!--                            tag="h5"-->
<!--                            size="sm"-->
<!--                            weight="medium"-->
<!--                            lead="none"-->
<!--                            class="line-clamp-1"-->
<!--                          >-->
<!--                            {{ tool.name }}-->
<!--                          </BaseHeading>-->
<!--                          <BaseParagraph size="xs" class="text-muted-400">-->
<!--                            {{ tool.description }}-->
<!--                          </BaseParagraph>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </BaseCard>-->
                  <!-- Stacks -->
<!--                  <BaseCard class="p-8">-->
<!--                    <h4-->
<!--                      class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"-->
<!--                    >-->
<!--                      Project Stacks-->
<!--                    </h4>-->
<!--                    <div class="space-y-8">-->
<!--                      <div-->
<!--                        v-for="stack in data?.project.stacks"-->
<!--                        :key="stack.name"-->
<!--                        class="flex items-center gap-2"-->
<!--                      >-->
<!--                        <BaseAvatar-->
<!--                          :src="stack.icon"-->
<!--                          size="xs"-->
<!--                          :data-nui-tooltip="stack.name"-->
<!--                          class="bg-muted-100 dark:bg-muted-700"-->
<!--                        />-->
<!--                        <div>-->
<!--                          <BaseHeading-->
<!--                            tag="h5"-->
<!--                            size="sm"-->
<!--                            weight="medium"-->
<!--                            lead="none"-->
<!--                            class="line-clamp-1"-->
<!--                          >-->
<!--                            {{ stack.name }}-->
<!--                          </BaseHeading>-->
<!--                          <BaseParagraph size="xs" class="text-muted-400">-->
<!--                            {{ stack.description }}-->
<!--                          </BaseParagraph>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </BaseCard>-->
                </div>
              </div>
            </div>
          </div>
          <!-- Team -->
<!--          <div v-else-if="activeValue === 'Questions'">-->
<!--            <div class="grid gap-6 sm:grid-cols-3">-->
<!--                <BaseCard-->
<!--                        elevated-hover-->
<!--                        class="hover:!border-primary-500 relative"-->
<!--                >-->
<!--                    <NuxtLink to="#">-->

<!--                        <div class="flex flex-col items-center p-5 sm:flex-row">-->
<!--                            <div class="flex flex-col gap-3 sm:flex-row">-->
<!--                                <div class="text-center leading-none sm:text-left">-->
<!--                                    <h1-->
<!--                                            class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium mb-4 "-->
<!--                                    >-->
<!--                                        {{ data?.project.owner.name }}-->
<!--                                    </h1>-->

<!--                                    &lt;!&ndash;Question&ndash;&gt;-->
<!--                                    <div-->
<!--                                            class="border-muted-200 dark:border-muted-700  border-b pb-4"-->
<!--                                    >-->
<!--                                        <p-->
<!--                                                class="text-muted-500 dark:text-muted-400 font-sans text-md leading-5"-->
<!--                                        >-->
<!--                                            <span class="text-white"> Question: </span>  {{ data?.project.owner.bio }}-->
<!--                                            {{ data?.project.owner.bio }}-->
<!--                                            {{ data?.project.owner.bio }}-->
<!--                                            {{ data?.project.owner.bio }}-->

<!--                                        </p>-->
<!--                                    </div>-->
<!--                                    &lt;!&ndash;Answer&ndash;&gt;-->
<!--                                    <div-->
<!--                                            class="border-muted-200 dark:border-muted-700 pt-4"-->
<!--                                    >-->
<!--                                        <p-->
<!--                                                class="text-muted-500 dark:text-muted-400 font-sans text-md leading-5"-->
<!--                                        >-->
<!--                                            <span class="text-white"> Answer: </span>  {{ data?.project.owner.bio }}-->
<!--                                        </p>-->
<!--                                    </div>-->

<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </NuxtLink>-->
<!--                </BaseCard>-->
<!--                <BaseCard-->
<!--                  elevated-hover-->
<!--                  class="hover:!border-primary-500 relative"-->
<!--                >-->
<!--                  <NuxtLink to="#">-->

<!--                      <div class="flex flex-col items-center p-5 sm:flex-row">-->
<!--                          <div class="flex flex-col gap-3 sm:flex-row">-->
<!--                              <div class="text-center leading-none sm:text-left">-->
<!--                                  <h1-->
<!--                                          class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium mb-4 "-->
<!--                                  >-->
<!--                                      {{ data?.project.owner.name }}-->
<!--                                  </h1>-->

<!--                                  &lt;!&ndash;Question&ndash;&gt;-->
<!--                                  <div-->
<!--                                          class="border-muted-200 dark:border-muted-700  border-b pb-4"-->
<!--                                  >-->
<!--                                      <p-->
<!--                                              class="text-muted-500 dark:text-muted-400 font-sans text-md leading-5"-->
<!--                                      >-->
<!--                                          <span class="text-white"> Question: </span>  {{ data?.project.owner.bio }}-->
<!--                                      </p>-->
<!--                                  </div>-->
<!--                                  &lt;!&ndash;Answer&ndash;&gt;-->
<!--                                  <div-->
<!--                                          class="border-muted-200 dark:border-muted-700 pt-4"-->
<!--                                  >-->
<!--                                      <p-->
<!--                                              class="text-muted-500 dark:text-muted-400 font-sans text-md leading-5"-->
<!--                                      >-->
<!--                                          <span class="text-white"> Answer: </span>  {{ data?.project.owner.bio }}-->
<!--                                      </p>-->
<!--                                  </div>-->

<!--                              </div>-->
<!--                          </div>-->
<!--                      </div>-->
<!--                  </NuxtLink>-->
<!--                </BaseCard>-->
<!--              &lt;!&ndash; Invite &ndash;&gt;-->
<!--              <div>-->
<!--                <button-->
<!--                  type="button"-->
<!--                  class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex h-full w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"-->
<!--                >-->
<!--                  <span class="block text-center font-sans">-->
<!--                    <span-->
<!--                      class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"-->
<!--                    >-->
<!--                      Ask Your Question-->
<!--                    </span>-->
<!--                    <span class="text-muted-400 block text-sm">-->
<!--                      Ask any Question regarding the shop-->
<!--                    </span>-->
<!--                  </span>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
          <!-- Tasks -->
<!--          <div v-else-if="activeValue === 'Review'">-->
<!--            <div class="grid gap-6 sm:grid-cols-3">-->
<!--              <BaseCard-->
<!--                v-for="item in data?.project.tasks"-->
<!--                :key="item.id"-->
<!--                elevated-hover-->
<!--                class="hover:!border-primary-500 flex cursor-pointer flex-col"-->
<!--                @click="openTaskPanel(item.id, data?.project.tasks)"-->
<!--              >-->
<!--                <div class="flex flex-col items-center p-5 sm:flex-row">-->
<!--                  <div class="flex flex-col gap-3 sm:flex-row">-->
<!--                    <Icon-->
<!--                      v-if="item.status === 0"-->
<!--                      name="ph:plus-circle-duotone"-->
<!--                      class="text-muted-400 h-6 w-6 shrink-0"-->
<!--                    />-->
<!--                    <Icon-->
<!--                      v-else-if="item.status === 5"-->
<!--                      name="ph:check-circle-duotone"-->
<!--                      class="text-success-500 h-6 w-6 shrink-0"-->
<!--                    />-->
<!--                    <Icon-->
<!--                      v-else-if="item.status === 1"-->
<!--                      name="ph:timer-duotone"-->
<!--                      class="text-muted-400 h-6 w-6 shrink-0"-->
<!--                    />-->
<!--                    <Icon-->
<!--                      v-else-if="item.status === 2 || item.status === 3"-->
<!--                      name="ph:warning-duotone"-->
<!--                      class="text-warning-500 h-6 w-6 shrink-0"-->
<!--                    />-->
<!--                    <div class="text-center leading-none sm:text-left">-->
<!--                      <h4-->
<!--                        class="text-muted-800 dark:text-muted-100 mb-2 font-sans text-base font-medium leading-tight"-->
<!--                      >-->
<!--                        {{ item.name }}-->
<!--                      </h4>-->
<!--                      <p class="text-muted-400 line-clamp-2 font-sans text-xs">-->
<!--                        {{ item.description }}-->
<!--                      </p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div-->
<!--                  class="bg-muted-50 dark:bg-muted-700/50 mt-auto flex items-center justify-between rounded-b-lg px-5 py-3"-->
<!--                >-->
<!--                  <div class="flex max-w-[180px] grow items-center gap-2">-->
<!--                    <BaseAvatar-->
<!--                      size="xxs"-->
<!--                      :src="item.assignee.src"-->
<!--                      :data-nui-tooltip="item.assignee.tooltip"-->
<!--                    />-->
<!--                    <BaseProgress-->
<!--                      :value="item.completion"-->
<!--                      size="xs"-->
<!--                      :color="item.status === 5 ? 'success' : 'primary'"-->
<!--                    />-->
<!--                  </div>-->
<!--                  <div class="text-muted-400 flex items-center gap-4">-->
<!--                    <div class="flex items-center gap-1 text-sm">-->
<!--                      <Icon name="ph:paperclip-duotone" class="h-4 w-4" />-->
<!--                      <span class="font-sans">-->
<!--                        {{ item.files.length }}-->
<!--                      </span>-->
<!--                    </div>-->
<!--                    <div class="flex items-center gap-1 text-sm">-->
<!--                      <Icon name="ph:chat-circle-duotone" class="h-4 w-4" />-->
<!--                      <span class="font-sans">-->
<!--                        {{ item.comments.length }}-->
<!--                      </span>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </BaseCard>-->
<!--              &lt;!&ndash; Invite &ndash;&gt;-->
<!--              <div>-->
<!--                <button-->
<!--                  type="button"-->
<!--                  class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex h-full w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"-->
<!--                >-->
<!--                  <span class="block text-center font-sans">-->
<!--                    <span-->
<!--                      class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"-->
<!--                    >-->
<!--                      Create a new task-->
<!--                    </span>-->
<!--                    <span class="text-muted-400 block text-sm">-->
<!--                      Add a new task to your project-->
<!--                    </span>-->
<!--                  </span>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </template>
      </BaseTabs>
    </div>
  </div>
</template>
