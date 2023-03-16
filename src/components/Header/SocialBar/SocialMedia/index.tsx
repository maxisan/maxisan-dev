import Icon from '@shared/Icon';

interface Props {
  icon: string;
  url: string;
  name: string
}

const SocialMedia = ({icon, url, name}: Props) => {
  return (
    <a href={url} aria-label={name} target='_blank'>
      <Icon iconName={icon} collection='ai' />
    </a>
  )
}

export default SocialMedia