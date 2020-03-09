import React from 'react'

import styled from 'styled-components/macro'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const PROVINCES = [
  'QC',
  'AB',
  'ON',
  'NS',
  'NB',
  'MB',
  'BC',
  'SK',
  'PE',
  'YT',
  'NT',
  'NL',
  'NU'
]

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
`

const BottomText = styled.h3`
  font-size: ${props => props.theme.sizes.small};
  margin: 4px 0;
  text-align: center;
`

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
          <a href="https://dialogue.co/">{t('footer.dialogue')}</a>
          <a href="https://www.dialogue.co/?hs_preview=noJtvihk-26668052747">
            {t('footer.organizationResources')}
          </a>
          <a
            href={`https://www.dialogue.co/${
              i18n.language === 'en-CA' || i18n.language === 'en-US'
                ? 'en'
                : 'fr'
            }/contact-us`}
          >
            {t('footer.contactUs')}
          </a>
        </FooterColumn>
        <FooterColumn>
          <h3>{t('footer.forProvince')}</h3>
          {PROVINCES.map(province => (
            <Link key={province} to={`/info?id=ca-${province.toLowerCase()}`}>
              {t(`provinces.${province}`)}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn>
          <h3>{t('footer.forCanadians')}</h3>
          <Link to="/info?id=common">{t('footer.generalInfo')}</Link>
          <Link to="/info?id=elevated-covid-risk">
            {t('footer.elevatedInfection')}
          </Link>
          <Link to="/info?id=elevated-medical-risk">
            {t('footer.elevatedMedical')}
          </Link>
          <Link to="/info?id=travel-plans">{t('footer.travelPlans')}</Link>
        </FooterColumn>
      </FooterContent>
      <BottomText>© 2020 Dialogue</BottomText>
    </FooterContainer>
  )
}

export default Footer
