import styled from "styled-components";

const Button = styled.button<{variant?: 'primary' | 'secondary'}>`
  background-color: ${({theme, variant}) => variant === 'primary' ? theme.colors.accent.base : theme.colors.surface.base};
  color: ${({theme, variant}) => variant === 'primary' ? theme.colors.surface.base : 'white'};
  border: ${({theme, variant}) => variant === 'primary' ? 'none' : theme.colors.accent.base + ' solid 2px'};
  padding: 0.5rem 0.7rem ;
  height: fit-content;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.8rem;

  &:hover {
    background-color: ${({theme}) => theme.colors.accent.base};
  }
`

export default Button