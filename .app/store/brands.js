import {defineStore} from 'pinia';
import axios from 'axios';



const apiUrl = `${import.meta.env.VITE_API_URL}`

export const useBrandsStore = defineStore('brands', {
  state: () => ({
    brands: ref(null),
    brand: ref(null),
    type: ref(null),
    message: ref(null),
  }),
  actions: {
    async getBrandsList () {
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/brand/list/`, config);

        if (res.status === 200) {
          const payload = res.data
          this.brands = payload.brands
          this.type = payload.type
          this.message = payload.message

        } else {
          const payload = res.data
          this.brands = null
          this.type = payload.type
          this.message = payload.message
        }
      } catch(err) {
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.type = payload.type
        this.message = payload.message
      }
    },

    async getBrand (brand_id) {
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/brand/${brand_id}/`, config);

        if (res.status === 200) {
          const payload = res.data
          this.brands = payload.brands
          this.type = payload.type
          this.message = payload.message

        } else {
          const payload = res.data
          this.brands = null
          this.type = payload.type
          this.message = payload.message
        }
      } catch(err) {
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.type = payload.type
        this.message = payload.message
      }
    },

  }
})
