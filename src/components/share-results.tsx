import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { mobileBreakpoint } from 'theme'

const ShareContainer = styled.div`
  padding: 15px 0 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileBreakpoint}px) {
    flex-direction: column;
  }
`

const ShareButton = styled.a.attrs({ target: '_blank' })`
  font-size: ${props => props.theme.sizes.buttonText};
  font-family: ${props => props.theme.fontFamily};
  font-weight: 500;
  border-radius: 28px;
  padding: calc(${props => props.theme.sizes.buttonText} * 0.75) 24px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  min-width: 6em;
  margin: 6px;
  color: #fff;
  text-decoration: none;
  display: block;
  text-align: center;
  @media (max-width: ${mobileBreakpoint}px) {
    width: 70vw;
    max-width: 320px;
  }
`

const FacebookShareButton = styled(ShareButton)`
  background: #3b5998;
`

const TwitterSharebutton = styled(ShareButton)`
  background: #1da1f2;
`

export interface Props {
  classes: string[]
}

export const ShareResults: React.FC<Props> = (props: any) => {
  const { t, i18n } = useTranslation()

  const url = encodeURI(window.location.href)
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`
  const twitterHref = `https://twitter.com/intent/tweet?text=${i18n.t(
    'share.twitterShareText',
    { url }
  )}`

  const hasClasses = props.classes && props.classes.length > 0

  return (
    hasClasses && (
      <ShareContainer>
        <FacebookShareButton href={facebookHref}>
          {t('share.facebookButton')}
        </FacebookShareButton>
        <TwitterSharebutton href={twitterHref}>
          {t('share.twitterButton')}
        </TwitterSharebutton>
      </ShareContainer>
    )
  )
}

export default ShareResults
