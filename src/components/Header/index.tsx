import medias from 'data/socialMedia.json'
import { useTranslations } from 'next-intl'
import SocialBar from './SocialBar'
import { MainContainer, Title } from './styles'


const Header = () => {
  const t = useTranslations('header')
  return (
    <MainContainer>
      <Title>
        {t('title')}
      </Title>
      <SocialBar medias={medias} />
    </MainContainer>
  )
}

export default Header