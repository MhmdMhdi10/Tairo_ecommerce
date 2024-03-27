// src/store/index.js
import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    currentLocale: "fa", // Default to English
  }),

  actions: {
    // Action to change locale
    setLocale(locale) {
      this.currentLocale = locale;
      // Set cookie with expiration date
      const cookieLocale = useCookie('i18n_redirected');
      cookieLocale.value = locale
    },
  },
});
