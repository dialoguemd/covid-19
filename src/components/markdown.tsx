import React from 'react'
import { parse } from 'node-html-parser'

import styled from 'styled-components/macro'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'
import ResultFooter from 'components/result-footer'

type Props = ReactMarkdownProps & { size?: 'small' | 'default' }

const markdownRenderers = {
  html: ({ value }: any) => {
    const element = (parse(value) as any).firstChild || {}
    const { tagName, attributes } = element
    if (tagName === 'ResultsFooter') {
      return <ResultFooter {...attributes} />
    }
    return value
  }
}

const MarkdownContainer: React.FC<Props> = ({ size = 'default', ...rest }) => (
  <ReactMarkdown {...rest} linkTarget="_blank" renderers={markdownRenderers} />
)

export const Markdown = styled(MarkdownContainer)`
  color: ${props => props.theme.colors.text};

  h1 {
    line-height: 1.5;
    border-bottom: 1px solid ${props => props.theme.colors.primaryLight};
  }

  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    font-weight: bold;
  }

  hr {
    border: 1px dashed ${props => props.theme.colors.primaryLight};
  }

  p,
  ul {
    font-size: ${props =>
      props.size === 'small'
        ? props.theme.sizes.small
        : props.theme.sizes.body};
  }

  & *:first-child {
    margin-top: 0;
  }

  & *:last-child {
    margin-bottom: 0;
  }
`

export default Markdown
