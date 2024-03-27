// middleware/redirectLocale.js

export default function ({ route, redirect, app }) {
  const defaultLocale = app.i18n.defaultLocale
  const currentLocale = app.i18n.locale

  // Check if the current locale is different from the default locale
  if (currentLocale !== defaultLocale && route.fullPath === '/') {
    // Redirect to the localized home page
    redirect(app.i18n.localePath('/'))
  }
}
