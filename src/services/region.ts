export const getRegion = () => {
  const region = localStorage.getItem('region') || 'ca'
  return {
    region,
    config: require(`regions/${region}/config.json`),
    rules: require(`regions/${region}/rules.json`),
    steps: require(`regions/${region}/steps.json`),
    manifest: require(`regions/${region}/manifest.json`),
    images: {
      flag: require(`regions/${region}/images/flag.jpg`),
      icon: require(`regions/${region}/images/icon.png`)
    }
  }
}
