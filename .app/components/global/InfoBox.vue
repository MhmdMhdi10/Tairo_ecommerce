<script setup lang="ts">

</script>


<template>
  <BaseCard class="pb-6">
    <div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5">
      <BaseHeading as="h3" size="sm" weight="medium">
        Information Box
      </BaseHeading>
      <BaseText size="xs" class="text-muted-400">Your contact information</BaseText>
    </div>
    <div class="px-8 pt-5">
      <!-- Phone Number Field -->
      <InfoBoxField label="Phone Number" value="Your Phone Number" />

      <!-- Second Phone Number Field -->
      <InfoBoxField label="Second Phone Number" value="Your Second Phone Number" />

      <!-- Cellphone Number Field -->
      <InfoBoxField label="Cellphone Number" value="Your Cellphone Number" />

      <!-- Cellphone Number Field -->
      <InfoBoxField label="Cellphone Number" value="Your Cellphone Number" />

      <!-- phone Number Field -->
      <InfoBoxField label="phone Number" value="Your phone Number 1" />

      <!-- phone Number Field -->
      <InfoBoxField label="Cellphone Number" value="Your phone Number 2" />

      <!-- Telegram Field -->
      <InfoBoxField label="Telegram" value="Your Telegram" />

      <!-- Instagram Address Field -->
      <InfoBoxField label="Instagram" value="Your Instagram Address" />

      <!-- Add more InfoBoxField components as needed -->
    </div>
  </BaseCard>
</template>


