import {
  demoRules,
  documentationRules,
  landingRules,
} from './config/routes-rules'

export default defineNuxtConfig({
  extends: [
    /**
     * App layers: these are the layers that contains specific features
     * - landing: contains landing pages
     * - documentation: contains all /documentation pages
     */
    '../layers/landing',
    process.env.ENABLE_DOCUMENTATION && '../layers/documentation',

    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/tairo-layout-sidebar',
    '../layers/tairo-layout-collapse',
    '../layers/tairo-layout-topnav',
    '../layers/tairo',
  ],

  site: {
    url: 'https://lalectro.com',
    name: 'Lalectro'
  },

  modules: [
    /**
     * Swiper is a nuxt module that allows us to use swiper in nuxt
     * wich is a carousel component used in the demo
     * @see https://github.com/cpreston321/nuxt-swiper
     */
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap'
  ],

  css: [
    '~/assets/css/colors.css',
    '@fontsource-variable/fira-code/index.css',
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/karla/index.css',
    '~/assets/fontiran.css'
  ],

  typescript: {
    tsConfig: {
      // Here you can customize the generated tsconfig.json file
    },
  },

  // nuxt behavior configuration
  runtimeConfig: {
    public: {
      // mapbox config
      mapboxToken: process.env.NUXT_PUBLIC_MAPBOX_TOKEN,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  routeRules: {
    ...demoRules,
    ...landingRules,
    ...(process.env.ENABLE_DOCUMENTATION ? documentationRules : {}),
  },

  // nuxt build configuration
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    define: {
      'process.test': false,
      // This is required for shiki to work (used to render markdown code blocks)
      'process.env.VSCODE_TEXTMATE_DEBUG': false,
      // This enables vue-axe to work (used to check a11y - see .demo/plugins/vue-axe.ts)
      'process.env.ENABLE_A11Y_AXE': process.env.ENABLE_A11Y_AXE,
    },
    build: {
      target: 'esnext',
    },
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {code: 'fa', iso: 'fa-IR', dir: 'rtl', name: 'فارسی'},
      {code: 'en', iso: 'en-US', dir: 'ltr', name: 'English'},
    ],
    defaultLocale: 'fa',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  ignore:  [
    'pages/blog/**/*',
    'pages/cart/**/*',
    'pages/dashboards/**/*',
    'pages/layouts/**/*',
    'pages/locator/**/*',
    'pages/profile/**/*',
    'pages/shipping/**/*',
    // 'pages/support/**/*',
    'pages/z',
  ],

  compatibilityDate: '2024-09-05'
})
