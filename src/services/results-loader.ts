import { importRegionFile } from 'services/region-loader'

export const getFilePath = async (filePath: string): Promise<string | null> => {
  try {
    const module = await importRegionFile(`info/${filePath}`)
    return module.default
  } catch (e) {
    console.warn(`failed to load result ${filePath}`, e)
    return null
  }
}

export const injectFooterHtml = (content, id) =>
  content && content + '\n<ResultsFooter id="' + id + '" />\n'

export const loadResults = async (filePaths: string[]): Promise<string> => {
  const resultFiles = await Promise.all(filePaths.map(getFilePath))

  const fileContents = await Promise.all(
    resultFiles.map(url => url && fetch(url).then(res => res.text()))
  )

  const resultsSet = fileContents
    .map((content, i) => injectFooterHtml(content, filePaths[i]))
    .filter(Boolean)

  // join file text, add a MD horizontal rule between them
  return resultsSet.join('\n---\n')
}
