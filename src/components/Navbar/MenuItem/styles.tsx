import styled from 'styled-components';

export const MainContainer = styled.li<{ active: boolean }>`
  list-style: none;
  min-width: 4rem;
  text-align: center;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: background-color 0.3s ease-in-out;
  outline: unset;
  
  ${({ active, theme }) => active ? 'color: ' + theme.colors.accent + '; border-left: 3px solid ' + theme.colors.accent + ';' : ''}

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors['surface-lighter']};
    cursor: pointer;
  }
`
