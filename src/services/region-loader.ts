import regionsIndex from 'regions/index.json'

export const getRegionId = () =>
  process.env.REACT_APP_INITIAL_REGION ||
  localStorage.getItem('region') ||
  regionsIndex.DOMAINS[window.location.hostname] ||
  regionsIndex.REGIONS[0]

export const requireRegionFile = file =>
  require(`regions/${getRegionId()}/${file}`)

export const importRegionFile = file =>
  import(`regions/${getRegionId()}/${file}`)
