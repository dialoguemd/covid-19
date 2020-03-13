import React from 'react'

import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { mobileBreakpoint } from 'theme'
import { getRegion } from 'services/region'
const { config, region } = getRegion()

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
  return <Link onClick={scrollToContent} {...props} />
}

const classifiedAdminAreas = config.ADMIN_AREAS.map(area => ({
  areaClass: `${region}-${area.toLowerCase()}`,
  area
}))

export const Footer: React.FC = props => {
  const { t, i18n } = useTranslation()

  return (
    <FooterContainer {...props}>
      <FooterContent>
        <FooterColumn>
          <h3>{t('footer.about')}</h3>
          <a href="https://github.com/dialoguemd/covid-19/wiki">
            {t('footer.aboutThisSite')}
          </a>
          <a href="https://github.com/dialoguemd/covid-19">
            {t('footer.githubProject')}
          </a>
          <a
            href={`https://dialogue.co/${
              i18n.languages[0] === 'en' ? 'en' : 'fr'
            }`}
          >
            {t('footer.dialogue')}
          </a>
          <a href="https://www.dialogue.co/?hs_preview=noJtvihk-26668052747">
            {t('footer.organizationResources')}
          </a>
          <a
            href={`https://www.dialogue.co/${
              i18n.languages[0] === 'en' ? 'en/contact-us/' : 'fr/nous-joindre/'
            }`}
          >
            {t('footer.contactUs')}
          </a>
        </FooterColumn>
        <FooterColumn>
          <h3>{t('footer.forProvince')}</h3>
          {classifiedAdminAreas.map(({ areaClass, area }) => (
            <AutoScrollLink key={area} to={`/info?id=${areaClass}`}>
              {t(`provinces.${area}`)}
            </AutoScrollLink>
          ))}
        </FooterColumn>
        <FooterColumn>
          <h3>{t('footer.forCanadians')}</h3>
          <AutoScrollLink to="/info?id=common">
            {t('footer.generalInfo')}
          </AutoScrollLink>
          <AutoScrollLink to="/info?id=elevated-covid-risk">
            {t('footer.elevatedInfection')}
          </AutoScrollLink>
          <AutoScrollLink to="/info?id=elevated-medical-risk">
            {t('footer.elevatedMedical')}
          </AutoScrollLink>
          <AutoScrollLink to="/info?id=travel-plans">
            {t('footer.travelPlans')}
          </AutoScrollLink>
        </FooterColumn>
      </FooterContent>
      <BottomText>© 2020 Dialogue</BottomText>
    </FooterContainer>
  )
}

export default Footer
