import React from 'react'

import styled from 'styled-components/macro'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'

type Props = ReactMarkdownProps & { size?: 'small' | 'default' }

const MarkdownContainer: React.FC<Props> = ({ size = 'default', ...rest }) => (
  <ReactMarkdown {...rest} />
)

export const Markdown = styled(MarkdownContainer)`
  color: ${props => props.theme.colors.text};

  h1 {
    line-height: 1.5;
    border-bottom: 1px solid ${props => props.theme.colors.primaryLight};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
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
