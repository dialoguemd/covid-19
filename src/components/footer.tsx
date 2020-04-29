import React from 'react'

import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'

import LocalizedLink from './localized-link'
import { mobileBreakpoint } from 'theme'

const FooterContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundLight};
  border-top: 1px solid ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.text};
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 900px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 12px;

  h3 {
    font-size: ${props => props.theme.sizes.small};
  }

  a {
    font-size: ${props => props.theme.sizes.small};
    margin: 3px 0;
    color: ${props => props.theme.colors.text};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-bottom: 15px;

  @media (max-width: ${mobileBreakpoint}px) {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const BottomText = styled.h3`
  font-size: ${props => props.theme.sizes.small};
  margin: 4px 0;
  text-align: center;
  font-weight: 300;
`

// Todo: replace this with a proper solution
const scrollToContent = () => {
  const contentAnchor = window.document.getElementById('contentScrollAnchor')
  if (contentAnchor) {
    contentAnchor.scrollIntoView()
  }
}

const AutoScrollLink: React.FC<any> = props => {
  return <LocalizedLink onClick={scrollToContent} {...props} />
}

export const Footer: React.FC = props => {
  const { t, i18n } = useTranslation()

  const aboutMenu: Array<[string, string]> = i18n.t('footer.aboutMenu', {
    returnObjects: true,
    defaultValue: []
  })

  const adminAreaMenu: Array<[string, string]> = i18n.t(
    'footer.adminAreaMenu',
    {
      returnObjects: true,
      defaultValue: []
    }
  )

  const classMenu: Array<[string, string]> = i18n.t('footer.classMenu', {
    returnObjects: true,
    defaultValue: []
  })

  return (
    <FooterContainer {...props}>
      <FooterContent>
        {aboutMenu.length > 0 && (
          <FooterColumn>
            <h3>{t('footer.aboutHeader')}</h3>
            {aboutMenu.map(([text, url]) => (
              <a key={text} href={url}>
                {text}
              </a>
            ))}
          </FooterColumn>
        )}
        {adminAreaMenu.length > 0 && (
          <FooterColumn>
            <h3>{t('footer.adminAreaHeader')}</h3>
            {adminAreaMenu.map(([text, classes]) => (
              <AutoScrollLink key={text} to={`/info?id=${classes}`}>
                {text}
              </AutoScrollLink>
            ))}
          </FooterColumn>
        )}
        {classMenu.length > 0 && (
          <FooterColumn>
            <h3>{t('footer.classHeader')}</h3>
            {classMenu.map(([text, classes]) => (
              <AutoScrollLink key={text} to={`/info?id=${classes}`}>
                {text}
              </AutoScrollLink>
            ))}
          </FooterColumn>
        )}
      </FooterContent>
      <BottomText>{t('footer.bottomText')}</BottomText>
    </FooterContainer>
  )
}

export default Footer
