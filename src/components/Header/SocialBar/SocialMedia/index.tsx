import React, { ReactNode } from 'react'
import BrandIcon from '../../../shared/BrandIcon'

interface Props {
  icon: string;
  url: string;
  name: string
}

const SocialMedia = ({icon, url, name}: Props) => {
  return (
    <a href={url} aria-label={name} target='_blank'>
      <BrandIcon iconName={icon} />
    </a>
  )
}

export default SocialMedia