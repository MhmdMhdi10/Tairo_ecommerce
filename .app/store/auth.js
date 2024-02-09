import {defineStore} from 'pinia';
import axios from 'axios';
import {state} from "vue-tsc/out/shared";


const apiUrl = 'http://127.0.0.1:8000';

export const useAuthStore = defineStore('app', {
  state: ()=> ({
    access: this.accessToken,
    refresh: this.refreshToken,
    isAuthenticated: ref(false),
    user: ref(null),
    loading: ref(false),
    type: ref(null),
    message: ref(null),
  }),



  getters: {
    accessToken: () => {
      return localStorage.getItem('access');
    },
    refreshToken: () => {
        return localStorage.getItem('refresh');
    },
  },

  actions: {

    $resetAuthState() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      this.isAuthenticated.value = false;
      this.message = null;
      this.user = null;
      this.type = null;
      this.loading = false;
    },
    $setAuthLoading() {
      this.loading = true
    },
    $removeAuthLoading() {
      this.loading = false
    },
    $userLoadedSuccess(payload) {
      this.user = payload.user
      this.type = payload.type
      this.message = payload.message
    },
    $userLoadedFail(payload) {
      this.user = null
      this.type = payload.type
      this.message = payload.message
    },
    $authenticatedSuccess(payload) {
      this.isAuthenticated = true
      this.type = payload.type
      this.message = payload.message
    },
    $authenticatedFail(payload) {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.isAuthenticated = false
      this.access = null
      this.refresh = null
      this.type = payload.type
      this.message = payload.message
    },
    $LoginSuccess(payload) {
      this.isAuthenticated = true
      this.access = localStorage.getItem('access');
      this.refresh = localStorage.getItem('refresh');
      this.type = payload.type
      this.message = payload.message
    },
    $activationSuccess(payload) {
      this.isAuthenticated = true
      this.access = localStorage.getItem('access');
      this.refresh = localStorage.getItem('refresh');
      this.type = payload.type
      this.message = payload.message
    },
    $activationFail(payload) {
        this.$activationSuccess(payload);
    },


    $signupSuccess(payload) {  // Signup Logout LoginFail RefreshFail
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.isAuthenticated = false
      this.access = null
      this.refresh = null
      this.user = null
      this.type = payload.type
      this.message = payload.message
    },
    $signupFail(payload) {
        this.$signupSuccess(payload);
    },
    $loginFail(payload) {
        this.$signupSuccess(payload);
    },
    $refreshFail(payload) {
        this.$signupSuccess(payload);
    },
    $logoutSuccess(payload) {
        this.$signupSuccess(payload);
    },
    $logoutFail(payload) {
        this.$signupSuccess(payload);
    },









    async signup(username, phone_number, password, re_password) {
      this.loading = true;

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        username,
        phone_number,
        password,
        re_password
      });

      try {
        const res = await axios.post(`${apiUrl}/auth/register/`, body, config);

        if (res.status === 202) {

          const payload = res.data

          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          this.isAuthenticated = false
          this.access = null
          this.refresh = null
          this.user = null
          this.type = payload.type
          this.message = payload.message


        } else {
          const payload = res.data
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          this.isAuthenticated = false
          this.access = null
          this.refresh = null
          this.user = null
          this.type = payload.type
          this.message = payload.message

        }
        this.$removeAuthLoading();
      } catch (err) {
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }

        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.isAuthenticated = false
        this.access = null
        this.refresh = null
        this.user = null
        this.type = payload.type
        this.message = payload.message

        this.loading = false
      }
    },




    async activate(code, username, phone_number, password){
      this.loading = true;
      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      };

      const body = JSON.stringify({
          code, username, phone_number, password
      });

      try {
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/verify/`, body, config);

          if (res.status === 201) {
              const payload = res.data;
              this.isAuthenticated = true
              this.access = localStorage.getItem('access');
              this.refresh = localStorage.getItem('refresh');
              this.type = payload.type
              this.message = payload.message

          } else {
              const payload = res.data;
              this.isAuthenticated = true
              this.access = localStorage.getItem('access');
              this.refresh = localStorage.getItem('refresh');
              this.type = payload.type
              this.message = payload.message

          }
          this.loading = false;
      } catch (err) {
          let errorMessage = "Server error"; // Default error message
          let errorType = "failure"; // Default error type

          if (err.response && err.response.data) {
              errorMessage = err.response.data.message || errorMessage;
              errorType = err.response.data.type || errorType;
          }
          const payload = { "type": errorType, "message": errorMessage }
          this.isAuthenticated = true
          this.access = localStorage.getItem('access');
          this.refresh = localStorage.getItem('refresh');
          this.type = payload.type
          this.message = payload.message
          this.loading = false;
      }
    },

  },


});
