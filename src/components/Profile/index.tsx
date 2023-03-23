import Button from 'components/shared/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { COMMITS, EXPERIENCE, NAME, PROFILE_CATEGORY, TAG, YEARS } from './lang'
import { DataContainer, MainContainer, NameContainer, PictureContainer } from './styles'


const Profile = () => {
  const t = useTranslations(PROFILE_CATEGORY)
  return (
    <MainContainer area='profile'>
      <PictureContainer>
        <Image src='/assets/images/profile.webp' alt='' fill />
      </PictureContainer>
      <NameContainer>
        <h4>{t(NAME)}</h4>
        <p>{t(TAG)}</p>
      </NameContainer>
      <DataContainer>
        <div>
          <p>{t(EXPERIENCE)}</p>
          <p className='data'>2.5 {t(YEARS)}</p>
        </div>
        <div>
          <p>{t(COMMITS)}</p>
          <p className='data'>847</p>
        </div>
      </DataContainer>
      <Link href={'/about'}>
        <Button variant='secondary'>Descubrí más</Button>
      </Link>
    </MainContainer>
  )
}

export default Profile