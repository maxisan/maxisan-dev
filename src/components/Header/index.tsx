import medias from 'data/socialMedia.json'
import { useTranslations } from 'next-intl'
import SocialBar from './SocialBar'
import { MainContainer } from './styles'


const Header = () => {
  const t = useTranslations('header')
  return (
    <MainContainer>
      <h1>
        {t('title')}
      </h1>
      <SocialBar medias={medias} />
    </MainContainer>
  )
}

export default Header