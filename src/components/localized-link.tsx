import React from 'react'

import { useTranslation } from 'react-i18next'
import { Link, LinkProps } from 'react-router-dom'

const LocalizedLink: React.FC<LinkProps> = ({ className, to, children }) => {
  const { i18n } = useTranslation()
  const lang = i18n.languages[0]

  return (
    <Link className={className} to={`/${lang}${to}`}>
      {children}
    </Link>
  )
}

export default LocalizedLink
