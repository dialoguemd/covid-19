import { requireRegionFile } from 'services/region-loader'
import { overrides } from 'services/overrides'
export const config = requireRegionFile('config.json')
Object.assign(config, overrides.config)
