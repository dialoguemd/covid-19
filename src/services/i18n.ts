import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import packageJson from '../../package.json'

const resources = {
  en: {
    steps: require('i18n/steps.en.json'),
    translation: require('i18n/translation.en.json')
  },
  fr: {
    steps: require('i18n/steps.fr.json'),
    translation: require('i18n/translation.en.json')
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
    nonExplicitWhitelist: true,
    resources,
    appendNamespaceToMissingKey: true,
    detection: {
      order: ['querystring', 'navigator', 'htmlTag'],
      caches: []
    }
  })

export default i18n
