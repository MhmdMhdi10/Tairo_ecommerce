import {defineStore} from 'pinia';
import axios from 'axios';



const apiUrl = `${import.meta.env.VITE_API_URL}`

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

    $refreshSuccess(payload){
      localStorage.setItem('access', payload.access);
      this.access = localStorage.getItem('access')
      this.type =  payload.type
      this.message = payload.message
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







    async checkAuthenticated(){
      if (localStorage.getItem('access')) {
        const config = {
          headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
          }
        };

        try {
          const res = await axios.get(`${apiUrl}/auth/check_authentication/`, config);

          if (res.status === 200) {
            const payload = res.data
            this.isAuthenticated = true
            this.type = payload.type
            this.message = payload.message
            console.log("asdjasdksdkahsbdkabdshad", this.isAuthenticated)

          } else {
            const payload = res.data
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            this.isAuthenticated = false
            this.access = null
            this.refresh = null
            this.type = payload.type
            this.message = payload.message
          }
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
          this.type = payload.type
          this.message = payload.message

        }
      } else {
        const payload = { "type": 'failure', "message": "user is not logged in" }
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.isAuthenticated = false
        this.access = null
        this.refresh = null
        this.type = payload.type
        this.message = payload.message
      }
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
        this.loading = false;
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




    async activate(code, username, phone_number, password, callBackUrl){
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
          const res = await axios.post(`${apiUrl}/auth/verify/`, body, config);
          const router = useRouter();
          if (res.status === 201) {
              const payload = res.data;
              this.isAuthenticated = true
              this.access = localStorage.getItem('access');
              this.refresh = localStorage.getItem('refresh');
              this.type = payload.type
              this.message = payload.message


              router.push(callBackUrl);

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




    async load_user() {
      if (localStorage.getItem('access')) {
        const config = {
          headers: {
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
          }
        };
        try {
          const res = await axios.get(`${apiUrl}/auth/me/`, config);

          if (res.status === 200) {
            const payload = res.data

            this.user = payload.user
            this.type = payload.type
            this.message = payload.message

          } else {
            const payload = res.data
            this.user = null
            this.type = payload.type
            this.message = payload.message
          }
        } catch (err) {
          let errorMessage = "Server error"; // Default error message
          let errorType = "failure"; // Default error type

          if (err.response && err.response.data) {
            errorMessage = err.response.data.message || errorMessage;
            errorType = err.response.data.type || errorType;
          }
          const payload = { "type": errorType, "message": errorMessage }
          this.user = null
          this.type = payload.type
          this.message = payload.message

        }
      } else {
        const payload = { "type": 'failure', "message": "user is not logged in" }
        this.user = null
        this.type = payload.type
        this.message = payload.message
      }
    },




    async login(phone_number, password, callBackUrl){
      this.loading = true

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        phone_number,
        password
      });

      try {
        const router = useRouter();
        const res = await axios.post(`${apiUrl}/auth/login/`, body, config);
        if (res.status === 200) {
          const payload = res.data

          localStorage.setItem('access', payload.access)
          localStorage.setItem('refresh', payload.refresh)

/*          await this.load_user();*/

          this.isAuthenticated = true
          this.access = localStorage.getItem('access');
          this.refresh = localStorage.getItem('refresh');
          this.type = payload.type
          this.message = payload.message



          router.push(callBackUrl);

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
          this.loading = false
        }
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



    async recover_link(phone_number){
      this.loading = true;

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        phone_number
      });
      try {
        const res = await axios.post(`${apiUrl}/auth/recover_link/`, body, config);

        if (res.status === 200) {

          const payload = res.data
          this.type = payload.type
          this.message = payload.message

        } else {
          const payload = res.data
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

        this.type = payload.type
        this.message = payload.message

        this.loading = false
      }
    },


    async recover_link_verify(isTokenValid ,uuid){
      this.loading = true;

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        uuid
      });
      try {
        const res = await axios.post(`${apiUrl}/auth/recover_link_verify/`, body, config);

        if (res.status === 200) {
          const payload = res.data
          localStorage.setItem("uuid", uuid)
          this.type = payload.type
          this.message = payload.message
          isTokenValid.value = true


        } else {
          const payload = res.data
          localStorage.removeItem("uuid")
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
        localStorage.removeItem("uuid")
        this.type = payload.type
        this.message = payload.message
        this.loading = false
      }
    },

    async recover_change_password(password, re_password){
      this.loading = true;

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({
        uuid: localStorage.getItem("uuid"),
        password,
        re_password
      });

      try {
        const res = await axios.post(`${apiUrl}/auth/recover_change_password/`, body, config);

        if (res.status === 202) {

          const payload = res.data
          localStorage.removeItem('uuid')
          this.type = payload.type
          this.message = payload.message

        } else {
          const payload = res.data
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
        this.type = payload.type
        this.message = payload.message

        this.loading = false
      }
    },


    async refresher() {
      if (localStorage.getItem('refresh')) {
        const config = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        };

        const body = JSON.stringify({
          refresh: localStorage.getItem('refresh')
        });

        try {
          const res = await axios.post(`${apiUrl}/auth/refresh/`, body, config);

          if (res.status === 200) {
            const payload = res.data
            localStorage.setItem('access', payload.access);
            this.access = localStorage.getItem('access')
            this.type =  payload.type
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
        }
      } else {
          const payload = { "type": "failure", "message": "you are not logged in" }
          localStorage.removeItem('access');
          localStorage.removeItem('refresh');
          this.isAuthenticated = false
          this.access = null
          this.refresh = null
          this.user = null
          this.type = payload.type
          this.message = payload.message
      }
    },



    async logout(){
      if (localStorage.getItem('refresh')) {
        const config = {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        };

        const body = JSON.stringify({
          refresh: localStorage.getItem('refresh')
        });

        try {
          const res = await axios.post(`${apiUrl}/auth/logout/`, body, config);

          if (res.status === 200) {
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
        }
      } else {
        const payload = {"type": "failure", "message": "you are logged out"}
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.isAuthenticated = false
        this.access = null
        this.refresh = null
        this.user = null
        this.type = payload.type
        this.message = payload.message
      }
    }


  },
});
