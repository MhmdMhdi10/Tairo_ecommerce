import {defineStore} from 'pinia';
import axios from 'axios';
import {state} from "vue-tsc/out/shared";
import { Alert } from "./alert";

const apiUrl = 'http://127.0.0.1:8000';

export const Auth = defineStore('app', {  state: () => ({
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false,
    type: null,
    message: null,
  }),



  getters: {

  },

  actions: {
    async signup(username, phone_number, password, re_password) {
      this.$setAuthLoading();

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
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register/`, body, config);

        if (res.status === 202) {
          const payload = res.data
          this.$removeToken(payload);

          Alert.setAlert(res.data.message , res.data.type)
        } else {
          const payload = res.data
          this.$removeToken(payload);
          Alert.setAlert(res.data.message , res.data.type)
        }
        this.$removeAuthLoading;
      } catch (err) {
        let errorMessage = "Server error"; // Default error message
        let errorType = "failure"; // Default error type

        if (err.response && err.response.data) {
          errorMessage = err.response.data.message || errorMessage;
          errorType = err.response.data.type || errorType;
        }
        const payload = { "type": errorType, "message": errorMessage }
        this.$removeToken(payload);
        this.$removeAuthloading;
        Alert.setAlert(errorType , errorMessage)
      }
    }
  },
  async activate(code, username, phone_number, password){
    this.$setAuthLoading();
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
        this.$activation(payload);
        Alert.setAlert(res.data.message , res.data.type);
      } else {
        const payload = res.data;
        this.$activation(payload);
        Alert.setAlert(res.data.message , res.data.type);
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
      this.activation(payload);
      Alert.setAlert(errorMessage , errorType);
    }
  },

  reducers:{
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
    $Activation(payload) {
      this.isAuthenticated = true
      this.access = localStorage.getItem('access');
      this.refresh = localStorage.getItem('refresh');
      this.type = payload.type
      this.message = payload.message
    },
    $removeToken(payload) {  // Signup Logout LoginFail RefreshFail
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.isAuthenticated = false
      this.access = null
      this.refresh = null
      this.user = null
      this.type = payload.type
      this.message = payload.message
    },
  },
});
