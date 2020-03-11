export const getFilePath = async (filePath: string): Promise<string | null> => {
  try {
    const module = await import(`content/info/${filePath}`)
    return module.default
  } catch (e) {
    console.warn(`failed to load result ${filePath}`, e)
    return null
  }
}

export const loadResults = async (filePaths: string[]): Promise<string> => {
  const resultFiles = (await Promise.all(filePaths.map(getFilePath))).filter(
    Boolean
  )

  const fileContents = await Promise.all(
    resultFiles.map(url => fetch(url).then(res => res.text()))
  )

  // join file textx, add a MD horizontal rule between them
  return fileContents.join('\n---\n')
}
