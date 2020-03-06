import React, { useState, useEffect } from 'react'
import { getLocalizedFilePathsFromClasses } from 'services/content'

import { loadResults } from 'services/results-loader'
import Markdown from './markdown'

export interface Props {
  classes: string[]
}

export const Results: React.FC<Props> = ({ classes }) => {
  const [contents, setContents] = useState<string>(null)

  useEffect(() => {
    if (classes) {
      const results = getLocalizedFilePathsFromClasses(classes)
      loadResults(results).then(setContents)
    }
  }, [classes])

  return contents && <Markdown source={contents} />
}

export default Results
