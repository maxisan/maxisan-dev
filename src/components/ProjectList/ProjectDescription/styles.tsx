import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: center;
`

export const Title = styled.h3`
  
`

export const SeeMore = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({theme}) => theme.colors.accent.base};
`