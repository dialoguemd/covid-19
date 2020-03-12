import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { getRegion } from 'services/region'

const { config, region } = getRegion()
const { ENABLED_LANGUAGES } = config

const resources = {}
ENABLED_LANGUAGES.forEach(lang => {
  resources[lang] = {
    ...resources[lang],
    steps: require(`regions/${region}/i18n/steps.${lang}.ts`).default,
    translation: require(`regions/${region}/i18n/translation.${lang}.ts`)
      .default
  }
})

i18n
  .use(i18nLanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['translation', 'steps'],
    fallbackLng: ENABLED_LANGUAGES,
    initImmediate: true,
    nonExplicitWhitelist: true,
    resources,
    whitelist: ENABLED_LANGUAGES,
    load: 'languageOnly',
    appendNamespaceToMissingKey: true,
    detection: {
      order: ['querystring', 'navigator', 'htmlTag'],
      caches: []
    }
  })

export const getNextLanguage = () => {
  const langIndex = ENABLED_LANGUAGES.indexOf(i18n.language)
  const returnToZero = langIndex === ENABLED_LANGUAGES.length - 1
  return ENABLED_LANGUAGES[returnToZero ? 0 : langIndex + 1]
}

export default i18n
