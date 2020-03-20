import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { mobileBreakpoint } from 'theme'
import { requireRegionFile } from 'services/region-loader'
import { CtaButton } from 'components/buttons'
const config = requireRegionFile('config.json')

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

const ShareButton = styled(CtaButton)`
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

  const url = encodeURIComponent(
    `${window.location.origin}${window.location.pathname}`
  )
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
          {config.ENABLE_FACEBOOK_SHARE && (
            <FacebookShareButton as="a" href={facebookHref} target="_blank">
              {t('share.facebookButton')}
            </FacebookShareButton>
          )}
          {config.ENABLE_TWITTER_SHARE && (
            <TwitterSharebutton as="a" href={twitterHref} target="_blank">
              {t('share.twitterButton')}
            </TwitterSharebutton>
          )}
        </ShareContainer>
      </div>
    )
  )
}

export default ShareResults
