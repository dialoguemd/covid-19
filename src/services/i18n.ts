import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'

import packageJson from '../../package.json'

const resources = {
  en: {
    steps: require('i18n/steps.en.json')
  },
  fr: {
    steps: require('i18n/steps.fr.json')
  },
}

const fallbackLng =
  process.env.NODE_ENV !== 'production' && packageJson.supportedLanguages

const initOptions = {
  ns: ['steps'],
  fallbackLng,
  initImmediate: true,
  nonExplicitWhitelist: true,
  resources,
  saveMissing: true,
  appendNamespaceToMissingKey: true,
  parseMissingKeyHandler: key => `❌${key}`
}

i18n.use(i18nLanguageDetector).init(initOptions)

export default i18n
