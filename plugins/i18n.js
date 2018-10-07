import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from '~/libs/locales/en'
import zhLocale from '~/libs/locales/zh'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: 'en',
    // fallbackLocale: 'en',
    messages: {
      en: enLocale,
      zh: zhLocale
    }
  })

  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
