export const getFilePath = async (
  resultName: string
): Promise<string | null> => {
  try {
    const module = await import(`content/${resultName}.md`)
    return module.default
  } catch (e) {
    console.warn(`failed to load result ${resultName}.md`, e)
    return null
  }
}

export const loadResults = async (resultKeys: string[]): Promise<string> => {
  const resultFiles = (await Promise.all(resultKeys.map(getFilePath))).filter(
    Boolean
  )

  const fileContents = await Promise.all(
    resultFiles.map(url => fetch(url).then(res => res.text()))
  )

  // join file textx, add a MD horizontal rule between them
  return fileContents.join('\n---\n')
}
