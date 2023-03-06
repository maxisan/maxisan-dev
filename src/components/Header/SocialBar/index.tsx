import React, { ReactNode } from 'react'
import { ISocialMedia } from 'types'
import { MainContainer } from './styles'
import SocialMedia from './SocialMedia'

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