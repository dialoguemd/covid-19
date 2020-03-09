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
  display: flex;
  justify-content: center;
`

const FooterContent = styled.div`
  max-width: 900px;
  flex: 1 1 auto;
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

  h3 {
    font-size: ${props => props.theme.sizes.body};
    margin: 8px 0;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

export const Footer: React.FC = props => {
  const { t, i18n } = useTranslation()

  return (
    <FooterContainer>
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
          <a href={`https://www.dialogue.co/${i18n.language}/contact-us`}>
            {t('footer.contactUs')}
          </a>
        </FooterColumn>
        <FooterColumn>
          <h3>{t('footer.forProvince')}</h3>
          {PROVINCES.map(province => (
            <Link to={`/results?id=ca-${province.toLowerCase()}`}>
              {t(`provinces.${province}`)}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn>
          <h3>{t('footer.forCanadians')}</h3>
          <Link to="/results?id=common">{t('footer.generalInfo')}</Link>
          <Link to="/results?id=elevated-covid-risk">
            {t('footer.elevatedInfection')}
          </Link>
          <Link to="/results?id=elevated-medical-risk">
            {t('footer.elevatedMedical')}
          </Link>
          <Link to="/results?id=travel-plans">{t('footer.travelPlans')}</Link>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
