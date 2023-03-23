import styled from 'styled-components';
import { ITech } from 'types/index';
import Icon from '../Icon';

const MainContainer = styled.div<{featured?: boolean}>`
  font-size: ${({featured}) => featured ? '1.8rem' : '1.2rem'};
  width: ${({featured}) => featured ? '3rem' : '2rem'};
  aspect-ratio: 1 / 1;
  color: ${({theme, featured}) => featured ? theme.colors.badge.base : theme.colors.font.base};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({featured}) => featured ? '' : '10rem'};
  background: ${({featured, theme}) => featured ? 
    'center / contain no-repeat url("/assets/images/badge.png")' :
    `${theme.colors.background.base}b0`
  };
`

interface Props extends ITech {
  featured?: boolean;
}

const TechBadge = ({ name, icon, featured }:Props) => {
  return (
    <MainContainer featured={featured}>
      <Icon collection='si' iconName={icon} />
    </MainContainer>
  )
}

export default TechBadge