import queryString from 'query-string'
import { constantCase } from 'change-case'

export const overrides = { colors: {}, images: {}, config: {} } as any

const qsParams = queryString.parse(window.location.search)
if (qsParams.brand) {
  try {
    const { colors, images, config } = JSON.parse(
      atob(qsParams.brand as string)
    )
    if (colors) overrides.colors = colors
    if (images) overrides.images = images
    if (config) {
      Object.entries(config).forEach(([key, value]) => {
        overrides.config[constantCase(key)] = value
      })
    }
  } catch (err) {
    console.log('failed to parse branding payload', err)
  }
}
