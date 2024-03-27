<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
  }>(),
  {
    shape: 'rounded',
  },
);

const { close } = usePanels();

const products = [
  {
    id: 0,
    name: 'Apple — 5th Gen Connected Watch, 256GB',
    image: '/img/illustrations/widgets/watch-1.svg',
    price: 999,
    quantity: 1,
  },
  {
    id: 1,
    name: 'Apple — 5th Gen Connected Watch, 128GB',
    image: '/img/illustrations/widgets/watch-2.svg',
    price: 899,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Apple — 5th Gen Connected Watch, 64GB',
    image: '/img/illustrations/widgets/watch-3.svg',
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Apple — 5th Gen Connected Watch, 64GB',
    image: '/img/illustrations/widgets/watch-3.svg',
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Apple — 5th Gen Connected Watch, 64GB',
    image: '/img/illustrations/widgets/watch-3.svg',
    price: 799,
    quantity: 1,
  },
];

// Function to calculate the total price
const calculateTotalPrice = computed(() => {
  return products.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);
});
</script>

<template>
  <div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white rounded-md shadow-md">
    <div class="flex h-16 w-full items-center justify-between px-10 bg-primary-500 text-white rounded-t-md">
      <h2 class="font-heading text-lg font-semibold">Shopping Cart</h2>
      <button
        type="button"
        class="text-white hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="h-6 w-6" />
      </button>
    </div>

    <div class="nui-slimscroll relative h-[calc(100%-_64px)] w-full overflow-y-auto px-10 py-5">
      <!-- Display cart items as cards -->
      <div>
        <div class="mb-6 flex items-center justify-between">
          <BaseTag color="primary" size="sm" shape="full">{{ products.length }} items</BaseTag>
        </div>
        <div class="space-y-2">
          <div v-for="product in products" :key="product.id" class="flex gap-2">
            <div
              class="bg-muted-100 dark:bg-muted-700 flex h-16 w-16 shrink-0 items-center justify-center"
              :class="[
                props.shape === 'rounded' ? 'rounded' : '',
                props.shape === 'curved' ? 'rounded-xl' : '',
                props.shape === 'full' ? 'rounded-full' : '',
              ]"
            >
              <img
                class="h-12 w-12 object-cover object-center"
                :src="product.image"
                alt="Widget image"
              />
            </div>
            <div>
              <p class="text-muted-500 dark:text-muted-400 mt-1 font-sans text-xs">
                {{ product.name }}
              </p>
              <p class="font-sans font-semibold">${{ product.price }}</p>
            </div>
          </div>
        </div>
        <!-- Display the total price -->
        <div class="mt-4">
          <p class="font-sans font-semibold text-lg">
            Total: ${{ calculateTotalPrice }}
          </p>
        </div>
        <div class="mt-4">

          <BaseButton to="/cart" color="primary" :shape="props.shape" class="!h-12 w-full">
            Checkout
          </BaseButton>

        </div>
      </div>
    </div>
  </div>
</template>
