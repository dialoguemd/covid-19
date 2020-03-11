import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { mobileBreakpoint } from 'theme'

const ShareContainer = styled.div`
  padding: 15px 0 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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

const CtaText = styled.h3`
  font-size: ${props => props.theme.sizes.buttonText};
  margin: 4px 0;
  text-align: center;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
`

export interface Props {
  classes: string[]
}

export const ShareResults: React.FC<Props> = ({ classes, ...rest }) => {
  const { t, i18n } = useTranslation()

  const url = encodeURIComponent(window.location.href)
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  const twitterHref = `https://twitter.com/intent/tweet?text=${i18n.t(
    'share.twitterShareText',
    { url }
  )}`

  const hasClasses = classes && classes.length > 0

  return (
    hasClasses && (
      <div {...rest}>
        <CtaText>{t('share.CTA')}</CtaText>

        <ShareContainer>
          <FacebookShareButton href={facebookHref}>
            {t('share.facebookButton')}
          </FacebookShareButton>
          <TwitterSharebutton href={twitterHref}>
            {t('share.twitterButton')}
          </TwitterSharebutton>
        </ShareContainer>
      </div>
    )
  )
}

export default ShareResults
