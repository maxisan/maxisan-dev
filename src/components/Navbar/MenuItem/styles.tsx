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
  background-color: ${({ theme }) => theme.colors.surface.base};
  transition: background-color 0.3s ease-in-out;
  outline: unset;
  
  ${({ active, theme }) => active ? 'color: ' + theme.colors.accent.base + '; border-left: 3px solid ' + theme.colors.accent.base + ';' : ''}

  &:hover {
    color: ${({ theme }) => theme.colors.accent.base};
    background-color: ${({ theme }) => theme.colors.surface.light};
    cursor: pointer;
  }
`
