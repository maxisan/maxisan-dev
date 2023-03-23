import { ISocialMedia } from 'types/index'
import SocialMedia from './SocialMedia'
import { MainContainer } from './styles'

interface Props {
  medias: ISocialMedia[]
}

const SocialBar = ({ medias }: Props) => {
  return (
    <MainContainer>
      {medias.map(media => <SocialMedia key={media.id} {...media} />)}
    </MainContainer>
  )
}

export default SocialBar 