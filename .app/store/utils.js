import {defineStore} from 'pinia';



const apiUrl = `${import.meta.env.VITE_API_URL}`

export const useUtilsStore = defineStore('utils', {
  state: () => ({
    isRTL: ref(true), // Default to LTR
    language: ref('fa'), // Default language is English (en)
    flag: ref(''),
  }),
  getters: {
    textDirection: (state) => {
      return state.isRTL ? 'rtl' : 'ltr';
    },
    getLan: (state) => {
      return state.language;
    },
    getFlag: (state) => {
      console.log(state.flag)
      console.log("tate.flag;")
      return state.flag;
    },
  },

  actions: {
    async setRTL() {
      this.isRTL = true;
      this.language = 'fa'; // Set the language to "fa" for RTL
      this.flag = 'iran.png'; // Set the language to "fa" for RTL
      localStorage.setItem('textDirection', 'rtl'); // Save in session storage
      localStorage.setItem('language', 'fa'); // Save the language in session storage
      localStorage.setItem('flag', 'iran.png'); // Save the language in session storage
    },
    async setLTR() {
      this.isRTL = false;
      this.language = 'en'; // Set the language to "en" for LTR
      this.flag = 'united-states-of-america.svg'; // Set the language to "fa" for RTL
      localStorage.setItem('textDirection', 'ltr'); // Save in session storage
      localStorage.setItem('language', 'en'); // Save the language in session storage
      localStorage.setItem('flag', 'united-states-of-america.svg'); // Save the language in session storage
    },
    async loadTextDirection() {
      const storedDirection = localStorage.getItem('textDirection');
      if (storedDirection === null){
        console.log(storedDirection)
        console.log("storedDirectionstoredDirection")
        if (storedDirection === 'ltr') {
          this.isRTL = false;
          this.language = 'en';
          this.flag = 'united-states-of-america.svg';
        } else {
          this.isRTL = true;
          this.language = 'fa';
          this.flag = 'iran.png';
        }
      }else {
        this.isRTL = true;
        this.language = 'fa';
        this.flag = 'iran.png';
      }

    },
  },
});
