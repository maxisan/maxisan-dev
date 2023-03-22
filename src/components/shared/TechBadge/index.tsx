import styled from 'styled-components';
import { ITech } from 'types/index';
import Icon from '../Icon';

const MainContainer = styled.div<{featured?: boolean}>`
  font-size: 1.2rem;
  height: 2rem;
  width: 2rem;
  color: ${({theme}) => theme.colors.font};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({featured}) => featured ? '' : '10rem'};
  background: ${({featured, theme}) => featured ? 
    'center / contain url("/assets/images/badge.png")' :
    `${theme.colors.background}b0`
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