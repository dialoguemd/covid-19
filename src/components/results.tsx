import React, { useState, useEffect } from 'react'

import { loadResults } from 'services/results-loader'
import Markdown from './markdown'

export interface Props {
  results: string[]
}

export const Results: React.FC<Props> = ({ results }) => {
  const [contents, setContents] = useState<string>(null)

  useEffect(() => {
    if (results) {
      loadResults(results).then(setContents)
    }
  }, [results])

  return contents && <Markdown source={contents} />
}

export default Results
