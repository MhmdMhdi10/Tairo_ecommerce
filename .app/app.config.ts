export default defineAppConfig({
  tairo: {
    collapse: {



      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
          },
          {
            component: 'DemoToolbarLanguage',
          },
          // {
          //   component: 'DemoToolbarNotifications',
          // },
          // {
          //   component: 'DemoToolbarActivity',
          // },
          // {
          //   component: 'ToolbarPanelTest',
          // },
          {
            component: 'ToolbarAccountMenu',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          // {
          //   component: 'DemoCircularMenuActivity',
          // },
          {
            component: 'CircularToolbarPanelTest',
          },

        ],
      },
      navigation: {
        header: {
          component: 'DemoCollapseNavigationHeader',
        },
        footer: {

        },
        items: [
          {
            name: 'Home',
            icon: { name: 'ph:house-duotone', class: 'w-5 h-5' },
            to: '/',
          },
          {
            name: 'Products',
            icon: { name: 'ph:basket-duotone', class: 'w-5 h-5' },
            to: '/product/',
          },
          // {
          //   name: 'Blog',
          //   icon: { name: 'ph:pen-nib-straight-fill', class: 'w-5 h-5' },
          //   to: '/blog/',
          // },
          {
            name: 'our group',
            icon: { name: 'ph:users-three-duotone', class: 'w-5 h-5' },
            activePath: '/documentation/',
            children: [
              {
                name: 'contact us',
                to: '/contact/',
                icon: { name: 'ph:chalkboard-simple-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'about us',
                to: '/about/',
                icon: { name: 'ph:info-duotone', class: 'w-4 h-4' },
              },
              // {
              //   name: 'store locator',
              //   to: '/locator/',
              //   icon: { name: 'ph:map-pin-duotone', class: 'w-4 h-4' },
              // },
            ],
          },
          // {
          //   name: 'help for customers',
          //   icon: { name: 'ph:circle-wavy-question', class: 'w-5 h-5' },
          //   activePath: '/documentation',
          //   children: [
          //     {
          //       name: 'customer support',
          //       to: '/support',
          //       icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
          //     },
          //     {
          //       name: 'privacy policy',
          //       to: '/policy/privacy/',
          //       icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
          //     },
          //     {
          //       name: 'shipping policy',
          //       to: '/policy/shipping/',
          //       icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
          //     },
          //     {
          //       name: 'return policy',
          //       to: '/policy/return/',
          //       icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },
          //     },
          //   ],
          // },
          // {
          //   name: 'Search',
          //   icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
          //   click: () => {
          //     const { open } = usePanels()
          //     open('search')
          //   },
          //
          // },
          {
            name: 'Divider',
            divider: true,
          },
          // {
          //   name: 'Dashboard',
          //   icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },
          //   to: '/dashboards/analytics',
          // },
        ],
      },
    },
    panels: [
      {
        name: 'language',
        position: 'right',
        component: 'DemoPanelLanguage',
      },
      // {
      //   name: 'activity',
      //   position: 'right',
      //   component: 'DemoPanelActivity',
      // },
      // {
      //   name: 'search',
      //   position: 'left',
      //   component: 'DemoPanelSearch',
      // },
      // {
      //   name: 'task',
      //   position: 'right',
      //   component: 'DemoPanelTask',
      // },
      // {
      //   name: 'PanelComponent',
      //   position: 'right',
      //   component: 'PanelComponent',
      // },
      {
        name: 'FilterPanel',
        position: 'right',
        component: 'FilterPanel',
      },
    ],
  },
})
