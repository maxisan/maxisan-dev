import styled from 'styled-components';
import { ITech } from 'types/index';
import Icon from '../Icon';

const MainContainer = styled.div<{backgroundColor: string; color: string; }>`
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({color, theme}) => color === 'dark' ? theme.colors.surface : theme.colors.font};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
`

const TechBadge = ({ name, icon, backgroundColor, color}:ITech) => {
  return (
    <MainContainer backgroundColor={backgroundColor} color={color}>
      <Icon collection='si' iconName={icon} />
    </MainContainer>
  )
}

export default TechBadge