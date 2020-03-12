import i18n from 'services/i18n'
import { getRegion } from 'services/region'
const { manifest } = getRegion()

export const getManifestFilesFromClasses = (classes: string[]) =>
  classes
    .flatMap(className => manifest.filter(file => file.class === className))
    .filter(Boolean)

export const getLocalizedFilePathsFromClasses = (classes: string[]) =>
  getManifestFilesFromClasses(classes)
    .filter(file => i18n.language.indexOf(file.lang) !== -1)
    .map(file => file.path)
