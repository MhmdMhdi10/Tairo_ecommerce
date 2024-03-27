<script setup lang="ts">
import {useAuthStore} from "~/store/auth";
import {useI18n} from "vue-i18n";
import {useUtilsStore} from "~/store/utils";

const auth = useAuthStore();
const checkAccessToken = auth.checkAuthenticated;
const loadUser = auth.load_user;
const refresh = auth.refresher;


const utils = useUtilsStore();
const loadTextDirection = utils.loadTextDirection;

const {locale, locales} = useI18n();


const initializeData = async () => {
  await loadTextDirection();
  await checkAccessToken();
  await refresh();
  await loadUser();
};


onMounted(() => {
  initializeData();
  if (process.client) {
    loadExternalScript();
  }
});




const loadExternalScript = () => {
  const script = document.createElement('script');
  script.src = "https://widget-react.raychat.io/install/widget.js";
  script.async = true;
  document.head.appendChild(script);
};

// Setting the RAYCHAT_TOKEN and LOAD_TYPE (only if running on the client-side)
if (process.client) {
  window.RAYCHAT_TOKEN = "9aef56fb-fc4d-495b-91fa-f448a567efeb";
  window.LOAD_TYPE = "SEO_FRIENDLY";
}


const { activeLayoutComponent } = useLayoutSwitcher()
</script>

<template >
  <TairoCollapseLayout >
      <slot />
  </TairoCollapseLayout>
</template>
