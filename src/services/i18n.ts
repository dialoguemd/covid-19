import i18n from 'i18next'
import i18nLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import queryString from 'query-string'
import { createBrowserHistory } from 'history'

import { requireRegionFile } from 'services/region-loader'
import { config } from 'services/config'

const { ENABLED_LANGUAGES } = config

const LANGUAGE_QUERY_STRING = 'lng'

const history = createBrowserHistory()

const langToResources = (lang: string) => ({
  steps: requireRegionFile(`i18n/steps.${lang}.ts`).default,
  translation: requireRegionFile(`i18n/translation.${lang}.ts`).default
})

const resources = ENABLED_LANGUAGES.reduce(
  (acc: object, lang: string) => ({ ...acc, [lang]: langToResources(lang) }),
  {}
)

i18n.on('initialized', () => {
  const location = history.location
  const parsed = queryString.parse(location.search)

  // remove lng querystring from url if present after initialization
  if (parsed[LANGUAGE_QUERY_STRING]) {
    const search = queryString.stringify({
      ...parsed,
      [LANGUAGE_QUERY_STRING]: undefined
    })
    history.push({ ...history.location, search })
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
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupQuerystring: LANGUAGE_QUERY_STRING
    }
  })

// Define global string replacements
i18n.options.interpolation.defaultVariables = {
  botNameIntro: config.ENABLE_BOT_NAME ? i18n.t('botNameIntro') : ''
}

export default i18n
