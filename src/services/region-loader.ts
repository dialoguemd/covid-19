export const getRegionId = () =>
  localStorage.getItem('region') || process.env.REACT_APP_INITIAL_REGION || 'ca'
export const requireRegionFile = file =>
  require(`regions/${getRegionId()}/${file}`)
export const importRegionFile = file =>
  import(`regions/${getRegionId()}/${file}`)
