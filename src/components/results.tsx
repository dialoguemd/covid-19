import React, { useState, useEffect } from 'react'

import ReactMarkdown from 'react-markdown'

import { loadResults } from 'services/results-loader'

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

  return contents && <ReactMarkdown source={contents} />
}

export default Results
