import i18n from 'services/i18n'
import contentManifest from 'content/manifest.json'

export const getManifestFilesFromClasses = classes =>
  contentManifest.filter(file => classes.indexOf(file.class) !== -1)

export const getLocalizedFilePathsFromClasses = classes =>
  getManifestFilesFromClasses(classes)
    .filter(file => i18n.language.indexOf(file.lang) !== -1)
    .map(file => file.path)
