import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'

import packageJson from '../../package.json'

const resources = {
  en: { translation: require('i18n/en.json') },
  fr: { translation: require('i18n/fr.json') }
}

const fallbackLng = process.env.NODE_ENV !== 'production' && packageJson.supportedLanguages

const initOptions = {
  fallbackLng,
  initImmediate: true,
  nonExplicitWhitelist: true,
  resources,
  saveMissing: true,
  parseMissingKeyHandler: key => `❌${key}`
}

i18n.use(i18nLanguageDetector).init(initOptions)

export default i18n
