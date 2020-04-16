import queryString from 'query-string'
import { requireRegionFile } from 'services/region-loader'
const config = requireRegionFile('config.json')
const qs = queryString.parse(window.location.search)
console.log('qs', qs)
export default {
  ...config,
  EMBEDDED: qs.embedded !== undefined
}
