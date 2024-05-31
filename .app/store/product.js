import {defineStore} from 'pinia';
import axios from 'axios';



const apiUrl = `${import.meta.env.VITE_API_URL}`

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    products_arrival: [],
    products_sold: [],
    total_products: ref(0),
    total_by_sold: ref(0),
    total_by_arrival: ref(0),
    total_search_products: ref(0),
    product: ref(null),
    search_products: [],
    related_products: [],
    filtered_products: [],
    message: ref(null),
    type: ref(null),
    pending: ref(false) // Add a pending state to track pending requests
  }),
  actions: {

    async get_products(limit = 12, page = 1 )  {
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      const params = {
        limit: limit,
        page: page
      };

      try {
        const res = await axios.get(`${apiUrl}/products/list/`, { ...config, params });
        this.pending = true
        if (res.status === 200) {
          const payload = res.data
          this.products = payload.products
          this.total_products = payload.total_products;
          this.message = payload.message
          this.type = payload.type
          this.pending = false
        } else {
          const payload = res.data
          this.products = null
          this.message = payload.message
          this.type = payload.type
          this.pending = false
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
        this.pending = false
      }
    },

    async get_products_by_arrival (limit = 12, page = 1 ){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      const params = {
        sortBy: 'date_created',
        order: 'desc',
        limit: limit,
        page: page
      };

      try {
        const res = await axios.get(`${apiUrl}/products/list/`, { ...config, params });

        if (res.status === 200) {
          const payload = res.data
          this.products_arrival = payload.products
          this.total_by_arrival = payload.total_products;
          this.message = payload.message
          this.type = payload.type
        } else {
          const payload = res.data
          this.products_arrival = null
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
        this.products_arrival = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_products_by_sold (limit = 12, page = 1 ){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      const params = {
        sortBy: 'sold',
        order: 'desc',
        limit: limit,
        page: page
      };

      try {
        const res = await axios.get(`${apiUrl}/products/list/`, { ...config, params });

        if (res.status === 200) {
          const payload = res.data
          this.products_sold = payload.products
          this.message = payload.message
          this.total_by_sold = payload.total_products;
          this.type = payload.type
        } else {
          const payload = res.data
          this.products_sold = null
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
        this.products_sold = null
        this.type = payload.type
        this.message = payload.message
      }
    },

    async get_product (slug){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await axios.get(`${apiUrl}/products/product/${slug}`, config);

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

    async get_related_products (productId, limit = 12, page = 1 ){
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      const params = {
        limit: limit,
        page: page
      };

      try {
        const res = await axios.get(`${apiUrl}/products/related/${productId}`, { ...config, params });

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

    async get_filtered_products(category_id, price_range, sort_by, order, limit = 12, page = 1 )  {
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
        order,
        limit,
        page
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

    async get_search_products (search, category_id, limit = 12, page = 1 ) {
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        search,
        category_id,
        page,
        limit
      });

      try {
        const res = await axios.post(`${apiUrl}/products/search`, body, config);

        if (res.status === 200 && !res.data.error) {
          const payload = res.data
          this.search_products= payload.search_products
          this.total_search_products = payload.total_products
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
