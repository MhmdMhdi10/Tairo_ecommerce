<script setup>
import { computed } from 'vue';
import { useCategoryStore } from '~/store/category';

const { isCategorySelected, selectCategory } = useCategoryStore();
</script>


<template>
  <div class="py-4 cursor-pointer">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          type="checkbox"
          :id="category.id"
          :checked="isCategorySelected(category.name.en)"
          @change="selectCategory(category.name.en)"
          class="form-checkbox h-5 w-5 text-primary-500"
        />
        <label :for="category.id" class="ml-2 font-semibold">{{ category.name.en }}</label>
      </div>
    </div>

    <template v-if="hasSubcategories">
      <div class="ml-6">
        <CategoryItem v-for="childCategory in category.sub_categories" :key="childCategory.id" :category="childCategory" />
      </div>
    </template>
  </div>
</template>

