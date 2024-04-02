import {defineStore} from 'pinia';
import axios from 'axios';



const apiUrl = `${import.meta.env.VITE_API_URL}`

export const useProductStore = defineStore('auth', {
  state: () => ({
    products: null,
    products_arrival: null,
    products_sold: null,
    product: null,
    search_products: null,
    related_products: null,
    filtered_products: null,
    message: null,
    type: null
  }),
  actions: {

    async get_products()  {
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/products/list`, config);

        if (res.status === 200) {
          const payload = res.data
          this.products = payload.products
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.products = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.products = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_products_by_arrival (){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/products/list?sortBy=date_created&order=desc&limit=3`, config);

        if (res.status === 200) {
          const payload = res.data
          this.products = payload.products
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.products = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.products = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_products_by_sold (){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/api/product/get-products?sortBy=sold&order=desc&limit=3`, config);

        if (res.status === 200) {
          const payload = res.data
          this.products = payload.products
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.products = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.products = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_product (productId){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/products/product/${productId}`, config);

        if (res.status === 200) {
          const payload = res.data
          this.product = payload.product
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.product = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.product = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_related_products (productId){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/products/related/${productId}`, config);

        if (res.status === 200 && !res.data.error) {
          const payload = res.data
          this.related_products= payload.related_products
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.related_products = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.related_products = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_filtered_products(category_id, price_range, sort_by, order)  {
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        category_id,
        price_range,
        sort_by,
        order
      });

      try {
        const res = await axios.post(`${apiUrl}/products/filter/`, body, config);

        if (res.status === 200 && !res.data.error) {
          const payload = res.data
          this.filtered_products= payload.filtered_products
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.filtered_products = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.filtered_products = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_search_products (search, category_id) {
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        search,
        category_id
      });

      try {
        const res = await axios.post(`${apiUrl}/api/product/search`, body, config);

        if (res.status === 200 && !res.data.error) {
          const payload = res.data
          this.search_products= payload.search_products
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.search_products = null
          this.message = payload.message
          this.type = payload.type
        }

      } catch(err){
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.search_products = null
        this.type = payload.type
        this.message = payload.message
      }
    },

  }

})
