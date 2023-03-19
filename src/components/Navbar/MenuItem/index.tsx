import Icon from 'components/shared/Icon';
import Link from 'next/link';
import { IMenuItem } from 'types/index';
import { MainContainer } from './styles';

interface Props extends IMenuItem {
  isActive: boolean;
}

const MenuItem = ({
  icon,
  link,
  isActive,
  id,
  name
}: Props) => {
  return (
    <Link href={link}>
      <MainContainer
        active={isActive}
        aria-label={name}
      >
        <Icon iconName={icon} collection='ai' />
      </MainContainer>
    </Link>
  )
}

export default MenuItem