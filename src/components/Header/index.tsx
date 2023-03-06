import { useTranslations } from 'next-intl'
import React from 'react'
import SocialBar from './SocialBar'
import { MainContainer, Title } from './styles'
import medias from 'data/socialMedia.json'


const Header = () => {
  const t = useTranslations('header')
  return (
    <MainContainer>
      <Title>
        <h2>
          {t('title')}
        </h2>
      </Title>
      <SocialBar medias={medias} />
    </MainContainer>
  )
}

export default Header