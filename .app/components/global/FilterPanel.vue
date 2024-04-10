<script setup lang="ts">
import { useCategoryStore } from "~/store/category";

const categoryStore = useCategoryStore();
const getCategories = categoryStore.getCategories;

const { locale } = useI18n();

const initializeData = async () => {
  await getCategories();
};


initializeData();

const { type, message, categories: fetchedCategories } = storeToRefs(categoryStore);



const props = withDefaults(
  defineProps<{
    categories?: string[];
  }>(),
  {
    categories: [],
  }
);


const { close } = usePanels();

const selectedCategories = ref<string[]>([]);

const selectCategory = (category: string) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter((c) => c !== category);
  } else {
    selectedCategories.value.push(category);
  }
};

const isCategorySelected = computed(() => (category: string) => selectedCategories.value.includes(category));






</script>

<template>
  <div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white rounded-md shadow-md">
    <div class="flex h-16 w-full items-center justify-between px-10 bg-primary-500 text-white rounded-t-md">
      <h2 class="font-heading text-lg font-semibold">Categories</h2>
      <button
        type="button"
        class="text-white hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="h-6 w-6" />
      </button>
    </div>

    <div class="nui-slimscroll relative h-[calc(100%_-_64px)] w-full overflow-y-auto px-10 py-5">
      <!-- Display categories from mock data -->
      <template v-for="category in fetchedCategories">
        <div class="py-4 cursor-pointer">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                type="checkbox"
                :id="category.name"
                :checked="isCategorySelected(category.name)"
                @change="selectCategory(category.name); selectChildren(category.name)"
                class="form-checkbox h-5 w-5 text-primary-500"
              />
              <label :for="category.name" class="ml-2 font-semibold">{{ category.name[locale] }}</label>
            </div>
          </div>

          <template v-if="category.sub_categories && category.children.length > 0">
            <div class="ml-6">
              <div
                v-for="child in category.sub_categories"
                :key="child"
                class="flex items-center mt-2"
              >
                <input
                  type="checkbox"
                  :id="child"
                  :checked="isCategorySelected(child)"
                  @change="selectCategory(child)"
                  class="form-checkbox h-5 w-5 text-primary-500"
                />
                <label :for="child" class="ml-2">{{ child.name[locale] }}</label>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
