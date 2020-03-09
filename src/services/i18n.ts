import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import packageJson from '../../package.json'
const resources = {
  en: {
    steps: require('i18n/steps.en.js').default,
    translation: require('i18n/translation.en.js').default
  },
  fr: {
    steps: require('i18n/steps.fr.js').default,
    translation: require('i18n/translation.fr.js').default
  }
}

const fallbackLng =
  process.env.NODE_ENV !== 'production' && packageJson.supportedLanguages

i18n
  .use(i18nLanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['translation', 'steps'],
    fallbackLng,
    initImmediate: true,
    nonExplicitWhitelist: false,
    resources,
    whitelist: packageJson.supportedLanguages,
    appendNamespaceToMissingKey: true,
    detection: {
      order: ['querystring', 'navigator', 'htmlTag'],
      caches: []
    }
  })

export default i18n
