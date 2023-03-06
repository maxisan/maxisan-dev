import styled from 'styled-components'

export const MainContainer = styled.nav`
  grid-area: nav;
  background-color: ${({theme}) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem 0;
`
