import Icon from 'components/shared/Icon';
import Link from 'next/link';
import { IMenuItem } from 'types/index';
import { MainContainer } from './styles';

interface Props extends IMenuItem {
  isActive: boolean;
  setActiveMenuItem: (id: string) => void
}


const MenuItem = ({
  icon,
  link,
  isActive,
  setActiveMenuItem,
  id,
  name
}: Props) => {
  return (
    <Link href={link}>
      <MainContainer
        active={isActive}
        onClick={() => setActiveMenuItem(id)}
        aria-label={name}
      >
        <Icon iconName={icon} />
      </MainContainer>
    </Link>
  )
}

export default MenuItem