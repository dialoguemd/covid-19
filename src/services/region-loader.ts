import regionsIndex from 'regions/index.json'

export const localStorageRegion =
  window.location.hostname === 'localhost' && localStorage.getItem('region')

export const getRegionId = () =>
  localStorageRegion ||
  process.env.REACT_APP_INITIAL_REGION ||
  regionsIndex.DOMAINS[window.location.hostname] ||
  regionsIndex.REGIONS[0]

export const requireRegionFile = (file: string) =>
  require(`regions/${getRegionId()}/${file}`)

export const importRegionFile = (file: string) =>
  import(`regions/${getRegionId()}/${file}`)
