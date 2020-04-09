import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { requireRegionFile } from 'services/region-loader'
import { config } from 'services/config'

const { ENABLED_LANGUAGES } = config

const langToResources = lang => ({
  steps: requireRegionFile(`i18n/steps.${lang}.ts`).default,
  translation: requireRegionFile(`i18n/translation.${lang}.ts`).default
})

const resources = ENABLED_LANGUAGES.reduce(
  (acc, lang) => ({ ...acc, [lang]: langToResources(lang) }),
  {}
)

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

// Define global string replacements
i18n.options.interpolation.defaultVariables = {
  botName: config.BOT_NAME || i18n.t('botName')
}

export default i18n
